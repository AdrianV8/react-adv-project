import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";

import { ProductContextProps, ProductCardProps} from "../interfaces/productInterfaces";

import {ProductButtons, ProductImage, ProductTitle} from "./index";
import styles from "../style/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={ {counter, increaseBy, product }}>
      <div className={styles.productCard}>

        { children }

      </div>
    </Provider>
  );
};


