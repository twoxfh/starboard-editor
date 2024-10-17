import csv
import os
import pandas as pd
import argparse

def parse_args():
    parser = argparse.ArgumentParser(description='Compare row data across multiple CSV files.')
    parser.add_argument('--dir', required=True, help='Directory containing CSV files')
    parser.add_argument('--column', required=True, type=int, help='Column index (0-based) to compare')
    parser.add_argument('--output', required=True, help='Output CSV file')
    parser.add_argument('--html', help='Output HTML file (optional)')
    parser.add_argument('--custom-header', type=str, help='Custom header names for the HTML table (optional)')
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

def write_csv(matrix, output_file):
    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for row in matrix:
            writer.writerow(row)

def write_html(matrix, file_list, output_file, custom_header=None):
    headers = ['Row Data'] + [f'{file}' for file in file_list]
    df = pd.DataFrame(matrix, columns=headers)

    # Define the CSS styles for Yes and No values
    def highlight_color(value):
        if value == 'Yes':
            return 'background-color: green'
        elif value == 'No':
            return 'background-color: red'
        return ''

    # Apply the styles to the DataFrame
    styled_df = df.style.map(highlight_color, subset=df.columns[1:])

    # Create the HTML content with the sorttable.js script included
     # Create the HTML content with the sorttable.js script included
    html_content = '''
    <html>
    <head>
    <style>
        .sortable {border-collapse: collapse; width: 100%;}
        .sortable th, .sortable td {border: 1px solid #ddd; padding: 8px; text-align: left;}
    </style>
    </head>
    <body>
    '''
    if custom_header is not None:
      html_content +='<h2>'
      html_content += custom_header
      html_content += '</h2>'
    # Explicitly add the 'sortable' class to the table tag
    html_table = styled_df.to_html(index=False, classes='sortable', escape=False)
    # Remove the existing 'class' attribute from the <table> tag, if present
    html_table = html_table.replace('<table ', '<table id="sortable" class="sortable"')
    # Add the filter form above the table
    html_content += html_table
    html_content += '''
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
      <script src='https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js'></script><script  src="./script.js"></script>
      <script>
      $(document).ready(function() {
        $("#sortable").DataTable();
      });
      </script>
    '''
    html_content += '</body></html>'
    
    # Write the HTML content to the file
    with open(output_file, 'w') as f:
        f.write(html_content)

def main():
    args = parse_args()
    directory = args.dir
    column = args.column
    output_file = args.output
    html_output_file = args.html
    custom_header = args.custom_header  # You need to add this argument in the argument parser

    # List all files in the directory
    file_list = [f for f in os.listdir(directory) if f.endswith('.csv')]

    # Read CSV files and create row data dictionary
    row_data_dict = read_csv_files(directory, column)

    # Generate the matrix
    matrix = generate_matrix(row_data_dict, file_list)

    # Write the matrix to the output file (CSV)
    write_csv(matrix, output_file)
    print(f"Comparison results have been written to {output_file}")

    # Write the matrix to the HTML output file if provided
    if html_output_file:
        write_html(matrix, file_list, html_output_file, custom_header)
        print(f"HTML output with sortable columns, highlighted Yes/No values, and custom headers has been written to {html_output_file}")

if __name__ == '__main__':
    main()