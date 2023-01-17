import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Heading,
  Divider,
  HStack,
} from "@chakra-ui/react";

const Products = ({ title, price, imgSrc, key}) => {
  return (
    <>
      <Card maxW="250" my={"10"} mx="2" key={key}>
        <CardBody>
          <Image
            src={imgSrc}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="sm">{title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              <HStack>
                <BsCurrencyDollar />
                <b>{price}</b>
              </HStack>
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </>
  );
};

export default Products;
