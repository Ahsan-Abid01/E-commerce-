import React, { useContext } from "react";
import { ContextData } from "../../Context/Context";
import {
  Drawer,
  DrawerBody,
  Text,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Input,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let min=[];
  let max=[];
  const btnRef = React.useRef();

  const { state, filterProduct, filterRange,searchFilters } = useContext(ContextData);

  let categorys = state.allProducts
    ? state.allProducts.map((elem) => {
     min.push(elem.price);
     max.push(elem.price);
        return elem.category;
      })
    : "";
  let newCategory = ["All",...new Set(categorys)];
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="gray"
        onClick={onOpen}
        position="fixed"
        zIndex={"11"}
      >
        <BiMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>The Lock.</DrawerHeader>

          <DrawerBody>
            <Box>
              <div>
                <Input type={"text"} placeholder="Search Products" onChange={(e)=>{searchFilters(e)}}/>
              </div>
              <VStack>
                <Heading>Category</Heading>
                {newCategory.map((elem, i) => {
                  return (
                    <li style={{cursor:"pointer"}}
                      onClick={(e) => {
                        filterProduct(e);
                        onClose();
                      }}
                      key={i}
                    >
                      {elem}
                    </li>
                  );
                })}
                <Box>
                  <Heading my="2">Price Range</Heading>
                  <HStack>
                    <Text>{Math.min(...min)}</Text>
                    <Input
                      type={"range"}
                      min={Math.min(...min)}
                      max={Math.max(...max)}
                      onChange={(e) => {
                        filterRange(e);
                      }}
                    />
                    <Text>{Math.max(...max)}</Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideBar;
