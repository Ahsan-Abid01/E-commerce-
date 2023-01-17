import React, { useContext, useEffect } from "react";
import Button from "./Button";
import Video from "./Video";
import "./Section.css";
import Products from "./Products";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import { HStack, Box, Heading, Text } from "@chakra-ui/react";
import { ContextData } from "../Context/Context";

const Section = () => {
  const { state, FetchData } = useContext(ContextData);

  useEffect(() => {
    FetchData();
  }, []);

  
  return (
    <>
      <HStack my="4" flexWrap={"wrap"}>
        <HStack flexDirection={"column"} flexWrap={"wrap"} bg="purple.400">
          <Box w={["100%", "500px"]}>
            <Heading size={"md"} color="white" p={"25px"}>
              Bold Chronography Rose Dail Ladies Watch
            </Heading>
            <Text pl={"30px"}>$10.00</Text>
          </Box>
          <Box>
            <img src="./Images/watch.png" alt="watch" />
          </Box>

          <Button btnText={"Shop Now"} btnBG={"#333"} />
        </HStack>
        {/* VIDEO */}
        <HStack
          justifyContent={["center", "auto"]}
          alignItems="center"
          flexDirection={["column", "row"]}
        >
          <Video />
          <Box w={["auto", "auto"]}>
            <Products
              title={"Leather Bags"}
              imgSrc={"./Images/bag.png"}
              price={"$ 19.00"}
            />
            <Products
              title={"Nike Shoes"}
              imgSrc={"./Images/shoes.png"}
              price={"$ 178.00"}
            />
          </Box>
        </HStack>
      </HStack>
      <HStack flexDirection={["column", "auto"]}>
        <Brand />
      </HStack>
      <Heading style={{ marginTop: "100px", textAlign: "center" }}>
        Top Trending
      </Heading>
      <HStack
        justifyContent={["center", "space-between"]}
        flexDirection={["column", "row"]}
      >
        {state.products
          ? state.products.map((elem) => {
              if (elem.category === "laptops") {
                return (
                  <Link to={`/shop`}>
                    <Products key={elem.id}
                      title={elem.title}
                      imgSrc={elem.images[0]}
                      price={elem.price}
                    />
                  </Link>
                );
              }
            })
          : ""}
      </HStack>
    </>
  );
};
export default Section;
