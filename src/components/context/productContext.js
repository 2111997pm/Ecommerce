import { useEffect, useContext, useReducer, createContext } from "react";
import data from "../data/data";

const appContext = createContext({});

const intialState = {
  isLoading: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, intialState);

  const getProducts = (data) => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "SET_DATA", payLoad: data });
  };

  useEffect(() => {
    getProducts(data);
  }, []);
  return (
    <appContext.Provider value={{ ...state }}>{children}</appContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(appContext);
};

export { appContext, AppProvider, useProductContext };
