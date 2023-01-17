import React from "react";
import { BiDollar } from "react-icons/bi";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Product = ({ title, image, price }) => {
  return (
    <motion.Box
      w={"100%"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <Card maxW="sm" my="2" mx="2">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            w={"200px"}
            h={"200px"}
            objectFit="cover"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <HStack>
              <BiDollar />
              <Text fontSize="xl">{price}</Text>
            </HStack>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </motion.Box>
  );
};

export default Product;
