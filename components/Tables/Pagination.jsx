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
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { CardContext } from "../../Contexts/CardContext";
import { COLUMN } from "./columns";

import Form from "./Form";

const Pagination = ({ cards }) => {
    const { fetching } = useContext(CardContext);
    const router = useRouter();
    const columns = useMemo(() => COLUMN, []);
    const data = useMemo(() => cards, [cards]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state,
        pageOptions,
        pageCount,
    } = useTable(
        {
            columns,
            data,
        },
        usePagination
    );
    const { pageIndex, pageSize } = state;

    const [viewCardPrice, setViewCardPrice] = useState();
    const [currentView, setCurrentView] = useState(false);
    const pageLength = Array.from(Array(pageCount), (_, index) => index + 1);
    return (
        <Box className="tab" minH="50vh">
            {fetching ? (
                <Box> Fetching Cards</Box>
            ) : (
                <Box>
                    <TableContainer>
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
                                            {headerGroup.headers.map(
                                                (column, idx) => (
                                                    <Th
                                                        fontWeight={"500"}
                                                        fontSize="14px"
                                                        key={idx}
                                                        {...column.getHeaderProps()}
                                                        textAlign="center"
                                                        _
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                    </Th>
                                                )
                                            )}
                                        </Tr>
                                    );
                                })}
                            </Thead>
                            {fetching ? (
                                "Fetching data....."
                            ) : (
                                <Tbody {...getTableBodyProps()}>
                                    {page.map((row, idx) => {
                                        prepareRow(row);

                                        return (
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
                                                                        cell
                                                                            .column
                                                                            .Header ===
                                                                        "MARKETPLACE"
                                                                    ) {
                                                                        setViewCardPrice(
                                                                            cell
                                                                                .row
                                                                                .original
                                                                        );
                                                                        setCurrentView(
                                                                            !currentView
                                                                        );
                                                                    } else if (
                                                                        cell
                                                                            .column
                                                                            .Header ===
                                                                            "TITLE" ||
                                                                        cell
                                                                            .column
                                                                            .Header ===
                                                                            ""
                                                                    ) {
                                                                        router.push(
                                                                            `/single_card/${cell.row.original.id}`
                                                                        );
                                                                    }
                                                                }}
                                                                fontSize={
                                                                    "14px"
                                                                }
                                                                fontWeight={600}
                                                                key={idx}
                                                                {...cell.getCellProps()}
                                                            >
                                                                {cell.render(
                                                                    "Cell"
                                                                )}
                                                            </Td>
                                                        </>
                                                    );
                                                })}
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            )}
                        </Table>
                    </TableContainer>

                    <Flex
                        pt="25"
                        justify="space-between"
                        w="100%"
                        align="center"
                        flexDir={["column-reverse", "row"]}
                        gap="22px"
                    >
                        <Box>
                            <Text className="sofia">
                                Showing {pageIndex + 1} to {pageSize} items of{" "}
                                {cards.length}
                                {/* {pageCount}*/}
                            </Text>
                        </Box>
                        <Flex gap="10px" align="center">
                            <Button
                                bgColor="transparent"
                                color="brand.grey"
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                {" "}
                                {`<`}
                            </Button>
                            {pageLength.map((i) => {
                                let active = pageIndex + 1;
                                return (
                                    <Button
                                        key={i}
                                        className="sofia"
                                        bgColor={
                                            active == i
                                                ? "brand.primary"
                                                : "transparent"
                                        }
                                        color={
                                            active == i
                                                ? "brand.white"
                                                : "brand.grey"
                                        }
                                        onClick={() => gotoPage(i - 1)}
                                    >
                                        {" "}
                                        {i}
                                    </Button>
                                );
                            })}
                            <Button
                                bgColor="transparent"
                                color="brand.grey"
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                {" "}
                                {`>`}
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            )}
        </Box>
    );
};

export default Pagination;

//  {
//      currentView && viewCardPrice ? (
//          <Tr
//              bg="brand.grey_4"
//              borderLeft="2px solid #8173de"
//              boxShadow={"0px 4px 20px rgba(18, 18, 18, 0.03)"}
//          >
//              <Td colSpan={"6"} pos="relative">
//                  <Box
//                      py="24px"
//                      px="16px"
//                      w="100%"
//                      position=""
//                      left={0}
//                      top={1}
//                      // minH="212px"
//                      zIndex={1}
//                      //    border={2}
//                      //    borderColor='#fff'
//                  >
//                      <Form />
//                  </Box>
//              </Td>
//          </Tr>
//      ) : (
//          ""
//      );
//  }
