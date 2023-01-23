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
    Text,
    Flex,
    useBoolean,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMN } from "./columns";
import { cards } from "../../cards";
import Form from "./Form";
import { useRouter } from "next/router";

const BasicTable = () => {
    const router = useRouter();
    const [flag, setFlag] = useBoolean();
    const columns = useMemo(() => COLUMN, []);
    const data = useMemo(() => cards, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    const [viewCardPrice, setViewCardPrice] = useState();
    const [currentView, setCurrentView] = useState(false);

    return (
        <TableContainer className="tab">
            <Table {...getTableProps()}>
                <Thead
                    bgColor="brand.light_1"
                    h="64px"
                    color="brand.lightBlack"
                    className="raleway"
                    borderRadius={"4px"}
                >
                    {headerGroups.map((headerGroup, idx) => {
                        return (
                            <Tr
                                py="24p"
                                {...headerGroup.getHeaderGroupProps()}
                                key={idx}
                            >
                                {headerGroup.headers.map((column, idx) => (
                                    <Th
                                        fontWeight={"500"}
                                        fontSize="14px"
                                        key={idx}
                                        {...column.getHeaderProps()}
                                        textAlign="center"
                                    >
                                        {column.render("Header")}
                                    </Th>
                                ))}
                            </Tr>
                        );
                    })}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row, idx) => {
                        prepareRow(row);

                        return (
                            <>
                                <Tr
                                    key={idx}
                                    {...row.getRowProps()}
                                    display=""
                                    borderColor={"brand.primary"}
                                    borderLeft={
                                        currentView
                                            ? "1px solid #6454D6"
                                            : "none"
                                    }
                                >
                                    {row.cells.map((cell, idx) => {
                                        return (
                                            <>
                                                <Td
                                                    onClick={() => {
                                                        if (
                                                            cell.column
                                                                .Header ===
                                                            "MARKETPLACE"
                                                        ) {
                                                            setViewCardPrice(
                                                                cell.row
                                                                    .original.id
                                                            );
                                                            setCurrentView(
                                                                !currentView
                                                            );
                                                        } else if (
                                                            cell.column
                                                                .Header ===
                                                                "TITLE" ||
                                                            cell.column
                                                                .Header === ""
                                                        ) {
                                                            router.push(
                                                                `/single_card/${cell.row.original.id}`
                                                            );
                                                        }
                                                    }}
                                                    fontSize={"14px"}
                                                    fontWeight={600}
                                                    key={idx}
                                                    {...cell.getCellProps()}
                                                >
                                                    {cell.render("Cell")}
                                                </Td>
                                            </>
                                        );
                                    })}
                                </Tr>

                                { viewCardPrice ? (
                                    <Tr
                                        bg="brand.grey_4"
                                        borderLeft="2px solid #8173de"
                                        boxShadow={
                                            "0px 4px 20px rgba(18, 18, 18, 0.03)"
                                        }
                                    >
                                        <Td colSpan={"6"} pos="relative">
                                            <Box
                                                py="24px"
                                                px="16px"
                                                w="100%"
                                                position=""
                                                left={0}
                                                top={1}
                                                // minH="212px"
                                                zIndex={1}
                                                //    border={2}
                                                //    borderColor='#fff'
                                            >
                                                <Form />
                                            </Box>
                                        </Td>
                                    </Tr>
                                ) : (
                                    ""
                                )}
                            </>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
