import csv
import os
import pandas as pd
import argparse

def parse_args():
    parser = argparse.ArgumentParser(description='Compare row data across multiple CSV files.')
    parser.add_argument('--dir', required=True, help='Directory containing CSV files')
    parser.add_argument('--column', required=True, type=int, help='Column index (0-based) to compare')
    parser.add_argument('--output', required=True, help='Output Excel file')
    parser.add_argument('--sheet_name', required=True, help='Sheet name to write into the Excel file')
    return parser.parse_args()

def read_csv_files(directory, column):
    row_data_dict = {}
    for filename in os.listdir(directory):
        if filename.endswith('.csv'):
            file_path = os.path.join(directory, filename)
            with open(file_path, mode='r', newline='') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    if row:
                        key = row[column]
                        if key not in row_data_dict:
                            row_data_dict[key] = set([filename])
                        else:
                            row_data_dict[key].add(filename)
    return row_data_dict

def generate_matrix(row_data_dict, file_list):
    matrix = []
    for key in row_data_dict:
        row = [key]
        for file in file_list:
            if file in row_data_dict[key]:
                row.append('Yes')
            else:
                row.append('No')
        matrix.append(row)
    return matrix

def write_excel(matrix, output_file, file_list, sheet_name):
    df = pd.DataFrame(matrix)
    df.columns = ['Data'] + [os.path.splitext(file)[0].upper() for file in file_list]

    # Apply color formatting directly to the DataFrame
    styled_df = df.style.map(
        lambda x: 'background-color: #CCFFCC' if x == 'Yes' else 'background-color: #FFCCCC' if x == 'No' else '',
        subset=df.columns[1:]
    )

    if os.path.exists(output_file):
        # Append to an existing Excel file with openpyxl
        with pd.ExcelWriter(output_file, engine='openpyxl', mode='a') as writer:
            styled_df.to_excel(writer, sheet_name=sheet_name, index=False)
    else:
        # Create a new Excel file with xlsxwriter for conditional formatting
        with pd.ExcelWriter(output_file, engine='xlsxwriter') as writer:
            styled_df.to_excel(writer, sheet_name=sheet_name, index=False)

            workbook = writer.book
            worksheet = writer.sheets[sheet_name]

            for col_idx in range(1, df.shape[1]):
                yes_format = workbook.add_format({'bg_color': '#CCFFCC'})  # Light green
                no_format = workbook.add_format({'bg_color': '#FFCCCC'})   # Light red

                worksheet.conditional_format(
                    1, col_idx, df.shape[0], col_idx,
                    {'type': 'cell', 'criteria': 'equal to', 'value': '"Yes"', 'format': yes_format})
                worksheet.conditional_format(
                    1, col_idx, df.shape[0], col_idx,
                    {'type': 'cell', 'criteria': 'equal to', 'value': '"No"', 'format': no_format})

def main():
    args = parse_args()
    directory = args.dir
    column = args.column
    output_file = args.output
    sheet_name = args.sheet_name

    file_list = [f for f in os.listdir(directory) if f.endswith('.csv')]

    row_data_dict = read_csv_files(directory, column)
    matrix = generate_matrix(row_data_dict, file_list)
    write_excel(matrix, output_file, file_list, sheet_name)
    print(f"Comparison results have been written to {output_file} in sheet {sheet_name}")

if __name__ == '__main__':
    main()
