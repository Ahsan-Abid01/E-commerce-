import { Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Brand = () => {
  return (
    <div className="brand" style={{ marginTop: "100px", textAlign: "center" }}>
      <Heading>Top Brands</Heading>
      <HStack
        className="brand_img"
        flexDirection={["column", "row"]}
        w={"100%"}
      >
        <img src="./Images/01.png" style={{ marginTop: "10px" }} />
        <img src="./Images/02.png" style={{ marginTop: "10px" }} />
        <img src="./Images/06.png" style={{ marginTop: "10px" }} />
        <img src="./Images/08.png" style={{ marginTop: "10px" }} />
      </HStack>
    </div>
  );
};

export default Brand;
