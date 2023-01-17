import { createContext, useReducer, useState } from "react";
import reducer from "./reducer";

const ContextData = createContext();

const initial = {
  products: [],
  cart: [],
  singleProduct: [],
  allProducts: [],
  isLoading: true,
};

const ContextProvider = ({ children }) => {

  const [qty, setQty] = useState();

  //CONTEXT
  const [state, dispatch] = useReducer(reducer, initial);

  //FETCH PRODUCTS FUNCTION Intial(products=[])
  const FetchData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let { products } = await data.json();
    dispatch({ type: "LOAD_API_DATA", payload: products });
    dispatch({ type: "IS_LOADING" });
  };

  //GET A SINGLE PRODUCT WITH ID Intial(singleProduct=[]);
  const SingleProductData = (id) => {
    localStorage.setItem("Sproduct", JSON.stringify(id));
    dispatch({ type: "SINGLE_PRODUCT", payload: id });
  };
//ADD INCREMENT IN PRODUCT QUANTITY
  const setIncr = (id) => {
    let qty = state.cart.map((elem) => {
      if (elem.id === id) {
        setQty((elem.qty += 1));
      }
    });
  };

//ADD DECREMENT IN PRODUCT QUANTITY
  const setDecr = (id) => {
    state.cart.map((elem) => {
      if (elem.id === id) {
        setQty((elem.qty -= 1));
      }
    });
  };
  //ADDED IN CART ARRAY Intial(cart=[])
  const AddInCart = (item) => {
    dispatch({ type: "ADD_IN_CART", payload: item });
  };
  //DELETE IN CART ARRAY Intial(cart=[])
  const deleteItem = (elem) => {
    let newArr = state.cart.filter((item) => {
      return item.id !== elem.id;
    });
    dispatch({ type: "DELETE_IN_CART", payload: newArr });
  };

  //Filter BY CATEGORY
  const filterProduct = (e) => {
    dispatch({ type: "FILTER_PRODUCT", payload: e.target.innerText });
  };

  //FILTER BY PRICE
  const filterRange = (e) => {
    dispatch({ type: "FILTER_RANGE", payload: e.target.value });
  };
//FILTER BY SEARCH
  const searchFilters = (e) => {
    dispatch({ type: "SEARCH_FILTER", payload: e.target.value });
  };

  return (
    <ContextData.Provider
      value={{
        searchFilters,
        filterRange,
        filterProduct,
        deleteItem,
        qty,
        AddInCart,
        setIncr,
        setDecr,
        FetchData,
        state,
        dispatch,
        SingleProductData,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export { ContextProvider, ContextData };
