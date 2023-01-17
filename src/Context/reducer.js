const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_API_DATA":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        isLoading: true,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: [{ ...action.payload, qty: 1, total: 0 }],
      };
    case "ADD_IN_CART":
      let newArr = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        cart: [...newArr, { ...action.payload }],
      };
    case "DELETE_IN_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "FILTER_PRODUCT":
      return {
        ...state,
        products: [
          ...state.allProducts.filter((item) => {
            if (action.payload == "All") {
              return item;
            }
            return item.category === action.payload;
          }),
        ],
      };
    case "FILTER_RANGE":
      return {
        ...state,
        products: [
          ...state.allProducts.filter((item) => {
            return Number(item.price) <= Number(action.payload);
          }),
        ],
      };
    case "SEARCH_FILTER":
      return {
        ...state,
        products: [
          ...state.allProducts.filter((item) => {
            return item.title
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        ],
      };
  }
};
export default reducer;
