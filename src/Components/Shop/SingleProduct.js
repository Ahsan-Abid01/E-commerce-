import React, { useContext, useState ,useEffect} from "react";
import { ContextData } from "../../Context/Context";
import { BiDollar, BiMinus, BiPlus } from "react-icons/bi";
import { ImTruck } from "react-icons/im";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdMoneyOffCsred } from "react-icons/md";
import { Box, Button, Heading, Text,HStack,Image, useToast, VStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const SingleProduct = () => {

  const toast = useToast()
  const {AddInCart} = useContext(ContextData);
  let [count, setCount] = useState([JSON.parse(localStorage.getItem('Sproduct'))]);
  const [src, setSrc] = useState(count[0].images[0]);
  const toaster=(item)=>{
  toast({
    position:"top",
    title: 'Item Added In Cart.',
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  AddInCart(item);
}
  

  return (
    <>
      <Box className="singleProduct" flexDirection={"row"}>
        {/* IMAGE SLIDER */}
        <Box className="images_PACK" flexBasis={['content','auto']}>
          <VStack className="thumbnail" w={'100%'}>{src ? <Image src={src} /> : ""}</VStack>
          <HStack className="thumb" flexWrap={"wrap"}>
            {count.length>0
              ? count[0].images.map((src) => {
                  return (
                    <Image
                      src={src}
                      className="img_prod"
                      boxShadow={'0px 0px 2px rgba(203, 17, 224, 0.719)'}
                      alt="cap"
                      onClick={(e) => {
                        setSrc(e.target.src);
                      }}
                    />
                  );
                })
              : "NO PRODUCTS FOUND"}
          </HStack>
        </Box>
        {/* {Content} */}

        <Box className="single_Content">
          {count.map((item) => { 
                return (
                  <div className="inner_content">
                    {item.qty=1}
                    <Heading my={'4'}>{item.title}</Heading>
                    <Text>{item.description}</Text>
                    <Box my='2'
                      className="Stars"
                      style={{ "--rating": `${item.rating}` }}
                    ></Box>
                      <HStack my={"2"}>
                      <BiDollar />
                      <Heading>
                      {item.price}
                    </Heading>
                      </HStack>
                 
                  
          <ul>
            <li>
              <ImTruck />
            </li>
            <li>
              <RiSecurePaymentFill />
            </li>
            <li>
              <MdMoneyOffCsred />
            </li>
          </ul>
          <Link to='/product/cart'>
          <Button variant={'ghost'} my='12' bgColor={'purple.500'} onClick={()=>{toaster(item)}
        }>
            Add Cart &nbsp; <BiPlus />
          </Button>
          </Link>
        </div>    
           );
    })}
  </Box>
      </Box>
    </>
  );
};

export default SingleProduct;
