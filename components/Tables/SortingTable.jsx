import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMN } from "./columns";
import { cards } from "../../cards.js";

const SortingTable = () => {
    const columns = useMemo(() => COLUMN, []);
    const data = useMemo(() => cards, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <Box>
            <Table {...getTableProps()} variant="stripe">
                <Thead>
                    {headerGroups.map((headerGroup, idx) => {
                        return (
                            <tr
                                {...headerGroup.getHeaderGroupProps()}
                                key={idx}
                            >
                                {headerGroup.headers.map((column, idx) => (
                                    <th key={idx} {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row, idx) => {
                        prepareRow(row);
                        return (
                            <Tr key={idx} {...row.getRowProps()}>
                                {row.cells.map((cell, idx) => {
                                    return (
                                        <Td key={idx} {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Box>
    );
};

export default SortingTable;
