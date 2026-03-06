import type { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type Column<T> = {
  field: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
};

type SimpleTableProps<T> = {
  columns: Column<T>[];
  rows: T[];
};

const SimpleTable = <T extends { id: number | string }>({
  columns,
  rows,
}: SimpleTableProps<T>): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={String(column.field)}>{column.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={String(column.field)}>
                  {column.render
                    ? column.render(row)
                    : String(row[column.field as keyof T] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
