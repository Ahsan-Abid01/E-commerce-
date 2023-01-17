import React, { useEffect, useState, useContext } from "react";
import SideBar from "./SideBar";
import "./Shop.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { ContextData } from "../../Context/Context";
import { HStack, Spinner } from "@chakra-ui/react";

const Shop = () => {
  const { FetchData, state, dispatch, SingleProductData } =
    useContext(ContextData);

  useEffect(() => {
    FetchData();
  }, [dispatch]);
  
  if (state.isLoading) {

    return <HStack justifyContent={'center'} alignItems='center' h='calc(100vh - 100px)'>
    <Spinner color="purple.400" size={'xl'}/>
    </HStack>
    ;
  }
  return (
    <>
      <div className="shop">
        <SideBar />
        <div className="shop_products">
          {state.products
            ? state.products.map((item) => {
              return (
                <Link to={`/view/product/${item.id}`} onClick={()=>{SingleProductData(item)}}>
                    <Product
                      key={item.id}
                      title={item.title}
                      image={item.images[0]}
                      price={item.price}
                    />
                  </Link>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Shop;
