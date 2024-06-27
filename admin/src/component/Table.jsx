import React from "react";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  // Use the useTable hook to create table instance
  const {
    getTableProps, // function to get the props for the table element
    getTableBodyProps, // function to get the props for the table body element
    headerGroups, // array of header groups
    rows, // array of table rows
    prepareRow, // function to prepare a row for rendering
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-[95%] mt-10 text-center">
      <thead className="bg-slate-950 text-white font-light ">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
