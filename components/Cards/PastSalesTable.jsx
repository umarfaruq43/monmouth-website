// import { Box } from '@chakra-ui/react'
// import React from 'react'

// const PastSalesTable = () => {
//   return (
//     <Box>PastSalesTable</Box>
//   )
// }

// export default PastSalesTable

import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useMemo } from "react";
import { useTable } from "react-table";

export default function PastSalesTable() {
    const data = useMemo(
        () => [
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
            {
                date: "2022-11-13",
                auction_house: "eBay",
                auction_type: "BEST_OFFER",
                price: "$40.0",
                url: "https://www.ebay.com/itm/2021-22-Panini-Prizm-JALEN-GREEN-Rookie-RC-SGC-10-/155240171240, ",
            },
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
                Header: "DATE",
                accessor: "date", // accessor is the "key" in the data
            },
            {
                Header: "AUCTION HOUSE",
                accessor: "auction_house",
            },

            {
                Header: "AUCTION TYPE",
                accessor: "auction_type",
            },

            {
                Header: "PRICE",
                accessor: "price",
            },
            {
                Header: "URL",
                accessor: "url",
                Cell: (values) => {
                    return (
                        <Box maxW="312px" noOfLines={1}>
                            {values.row.original.url}
                        </Box>
                    );
                },
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <Table {...getTableProps()} type="unstyled">
            <Thead
                bgColor="brand.light_1"
                h="64px"
                color="brand.lightBlack"
                className="raleway"
                borderRadius={"4px"}
            >
                {headerGroups.map((headerGroup, i) => (
                    <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
                        {headerGroup.headers.map((column, i) => (
                            <Th
                                className="sofia"
                                fontSize="14px"
                                fontWeight={400}
                                key={i}
                                {...column.getHeaderProps()}
                                textAlign="center"
                                color="brand.black"
                            >
                                {column.render("Header")}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <Tr {...row.getRowProps()} key={i}>
                            {row.cells.map((cell) => {
                                return (
                                    <Td
                                        className="sofia"
                                        color="brand.black"
                                        key={i}
                                        {...cell.getCellProps()}
                                        textAlign="center"
                                        maxW="312px"
                                        fontWeight={"600"}
                                        fontSize="14px"
                                    >
                                        {cell.render("Cell")}
                                    </Td>
                                );
                            })}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
}
