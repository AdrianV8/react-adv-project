import { createContext, ReactElement, CSSProperties } from "react";

import { useProduct } from "../hooks/useProduct";

import { ProductContextProps, Product } from '../interfaces/productInterfaces';

import styles from "../style/styles.module.css";

// product must be 'Product' type
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[]; // Puede que llegue un solo hijo o que lleguen un arreglo de varios
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={ {counter, increaseBy, product }}>
      <div 
        className={ `${styles.productCard} ${className} ` }
        style={style}
      >

        { children }

      </div>
    </Provider>
  );
};


