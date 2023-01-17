import React, { useContext } from "react";
import { ContextData } from "../../Context/Context";
import { BiDollar, BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  ButtonSpinner,
  Button,
  Box,
  useToast,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Table,
  Td,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Cart = () => {
  const toast = useToast();
  const { state, setDecr, setIncr, deleteItem } = useContext(ContextData);
  
  //ALERT BOX
  const toaster = (item) => {
    toast({
      position: "top",
      title: "Item Deleted In Cart.",
      status: "error",
      duration: 1000,
      isClosable: true,
    });
    deleteItem(item);
  };
  
  let total = [];
  state.cart.map((elem) => {
    return total.push(elem.total);
  });
  const stocks = (elem) => {
    if (elem.qty > elem.stock) {
      return (elem.qty = elem.stock);
    }
    if (elem.qty < 1) {
      return (elem.qty = 1);
    }
    return elem.qty;
  };
  let totals = total.reduce((acc, arr) => {
    return Number(acc) + Number(arr);
  }, 0);

  if (state.cart.length < 1) {
    return (
      <HStack
        justifyContent={"center"}
        alignItems="center"
        h="100vh"
        flexDirection={"column"}
      >
        <Heading>No Items In Cart Add Some!</Heading>
        <Link to="/shop" style={{ color: "#fff" }}>
          <Button bg="purple.400">Back To Shop</Button>
        </Link>
      </HStack>
    );
  }
  return (
    <>
      <TableContainer p={"0px 20px"} h="300px" w="600" overflowY={"scroll"}>
        <Table variant={"striped"} colorScheme="purple">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Total</Th>
              <Th>Item Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.cart.length > 0
              ? state.cart.map((elem) => {
                  return (
                    <Tr>
                      <Td>
                        <HStack>
                          <img
                            src={elem.images[0]}
                            alt="cap"
                            style={{ height: "50px" }}
                          />
                          &nbsp;&nbsp;
                          <b className="text-center">{elem.title}</b>
                        </HStack>
                      </Td>
                      <Td>
                        <Box>
                          <Button
                            size={"sm"}
                            width={'1rem'}
                            className="plus"
                            onClick={() => {
                              setIncr(elem.id);
                              stocks(elem);
                            }}
                            variant={"ghost"}
                            bg={"red"}
                            fontSize={"1rem"}
                          >
                            <BiPlus />
                          </Button>
                          <span className="count">{Number(elem.qty)}</span>
                          <Button
                            className="minus"
                            size={"sm"}
                            width={'1rem'}
                            onClick={() => {
                              setDecr(elem.id);
                              stocks(elem);
                            }}
                            bg={"green.300"}
                          >
                            <BiMinus />
                          </Button>
                        </Box>
                      </Td>
                      <Td>
                        <HStack>
                          <BiDollar />
                          <span>{elem.price}</span>
                        </HStack>
                      </Td>
                      <Td>
                        <HStack>
                          <BiDollar />
                          <span>{(elem.total = elem.price * elem.qty)}</span>
                        </HStack>
                      </Td>
                      <Td>
                        <MdDelete
                          cursor={"pointer"}
                          onClick={() => {
                            toaster(elem);
                          }}
                        />
                      </Td>
                    </Tr>
                  );
                })
              : ""}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack alignItems={"flex-end"} pr="100" flexDirection={"column"}>
        <Heading pb={"4"}>Sub Total</Heading>
        <HStack pb={"2"}>
          <span>Shipping Charges</span> <BiDollar />{" "}
          <span>{total.length * 5}</span>
        </HStack>
        <HStack pb={"4"}>
          <span>Total</span> <BiDollar />{" "}
          <span>{totals + total.length * 5}</span>
        </HStack>
        <Link to={"/checkout"}>
          <Button variant={"ghost"} bg={"purple.400"}>
            Check Out
          </Button>
        </Link>
      </HStack>
    </>
  );
};

export default Cart;
