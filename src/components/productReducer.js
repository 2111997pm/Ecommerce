const productsReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "SET_DATA") {
    let data = action.payload;
    return {
      ...state,
      isLoading: false,
      isLoading: data,
    };
  }
};
export default productsReducer;
