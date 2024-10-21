import csv
import os
import pandas as pd
import argparse
import logging
import json
import re

'''
This script compares specific columns across multiple CSV files located in a specified directory. It generates a comparison matrix and writes the results to an Excel file, with conditional formatting to highlight the presence ('Yes') or absence ('No') of data in each file. The script also logs a summary of the comparison process.

Usage:
    python comparexls.py --dir <directory> --columns <column_indices> --output <output_file> --sheet_name <sheet_name> --separator <separator> [--regex <regex_pattern>]
'''


logging.basicConfig(level=logging.INFO)

class CSVComparer:
    def __init__(self, directory, columns, output_file, sheet_name, separator, regex_pattern=None):
        self.directory = directory
        self.columns = columns
        self.output_file = output_file
        self.sheet_name = sheet_name
        self.separator = separator
        self.regex_pattern = regex_pattern
        self.file_list = []
        self.all_yes_count = 0
        self.not_all_yes_count = 0

    def parse_args(self):
        parser = argparse.ArgumentParser(description='Compare row data across multiple CSV files.')
        parser.add_argument('--dir', required=True, help='Directory containing CSV files')
        parser.add_argument('--columns', nargs='+', required=True, type=int, help='Column indices (0-based) to compare, space-separated for multiple columns')
        parser.add_argument('--output', required=True, help='Output Excel file')
        parser.add_argument('--sheet_name', required=True, help='Sheet name to write into the Excel file')
        parser.add_argument('--separator', required=True, help='Separator to use for concatenation')
        parser.add_argument('--regex', help='Regex pattern to filter column data')
        return parser.parse_args()

    def read_csv_files(self):
        row_data_dict = {}
        for filename in os.listdir(self.directory):
            if filename.endswith('.csv'):
                file_path = os.path.join(self.directory, filename)
                self.file_list.append(filename)
                with open(file_path, mode='r', newline='') as csvfile:
                    reader = csv.reader(csvfile)
                    for row in reader:
                        if row:
                            key_parts = [row[col].strip() for col in self.columns]
                            key = self.separator.join(key_parts)
                            if self.regex_pattern and re.match(self.regex_pattern, key):
                                if key not in row_data_dict:
                                    row_data_dict[key] = set()
                                row_data_dict[key].add(filename)
                            elif not self.regex_pattern:
                                if key not in row_data_dict:
                                    row_data_dict[key] = set()
                                row_data_dict[key].add(filename)
        return row_data_dict

    def generate_matrix(self, row_data_dict):
        matrix = []
        for key in row_data_dict:
            row = [key]
            for file in self.file_list:
                if file in row_data_dict[key]:
                    row.append('Yes')
                else:
                    row.append('No')
            matrix.append(row)
        return matrix

    def write_excel(self, matrix):
        df = pd.DataFrame(matrix)
        df.columns = ['Data'] + [os.path.splitext(file)[0].upper() for file in self.file_list]

        # Apply color formatting directly to the DataFrame
        styled_df = df.style.map(
            lambda x: 'background-color: #CCFFCC' if x == 'Yes' else 'background-color: #FFCCCC' if x == 'No' else '',
            subset=df.columns[1:]
        )

        if os.path.exists(self.output_file):
            # Append to an existing Excel file with openpyxl
            with pd.ExcelWriter(self.output_file, engine='openpyxl', mode='a') as writer:
                styled_df.to_excel(writer, sheet_name=self.sheet_name, index=False)
        else:
            # Create a new Excel file with xlsxwriter for conditional formatting
            with pd.ExcelWriter(self.output_file, engine='xlsxwriter') as writer:
                styled_df.to_excel(writer, sheet_name=self.sheet_name, index=False)

                workbook = writer.book
                worksheet = writer.sheets[self.sheet_name]

                for col_idx in range(1, df.shape[1]):
                    yes_format = workbook.add_format({'bg_color': '#CCFFCC'})  # Light green
                    no_format = workbook.add_format({'bg_color': '#FFCCCC'})   # Light red

                    worksheet.conditional_format(
                        1, col_idx, df.shape[0], col_idx,
                        {'type': 'cell', 'criteria': 'equal to', 'value': '"Yes"', 'format': yes_format})
                    worksheet.conditional_format(
                        1, col_idx, df.shape[0], col_idx,
                        {'type': 'cell', 'criteria': 'equal to', 'value': '"No"', 'format': no_format})

        # Count 'Yes' and 'No'
        for index, row in df.iterrows():
            if row[1:].eq('Yes').all():
                self.all_yes_count += 1
            else:
                self.not_all_yes_count += 1

    def log_summary(self):
        summary = {
            "output_file": self.output_file,
            "sheet_name": self.sheet_name,
            "rows_with_all_yes": self.all_yes_count,
            "rows_without_all_yes": self.not_all_yes_count,
            "csv_files_used": self.file_list
        }
        logging.info(json.dumps(summary, indent=4))

    def run(self):
        args = self.parse_args()
        self.directory = args.dir
        self.columns = args.columns
        self.output_file = args.output
        self.sheet_name = args.sheet_name
        self.separator = args.separator
        self.regex_pattern = args.regex

        logging.info("Starting the CSV comparison process.")
        row_data_dict = self.read_csv_files()
        matrix = self.generate_matrix(row_data_dict)
        self.write_excel(matrix)
        self.log_summary()

if __name__ == '__main__':
    comparer = CSVComparer('', [], '', '', '')
    comparer.run()