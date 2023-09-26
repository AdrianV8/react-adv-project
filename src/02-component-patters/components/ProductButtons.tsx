import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import styles from "../style/styles.module.css";

export interface ButtonsProps {
  className?: string;
  style?: CSSProperties;
}


export const ProductButtons = ({ className, style }: ButtonsProps) => {

    const { counter, increaseBy } = useContext( ProductContext);
  
    return (
      <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>
          -
        </button>
  
        <div className={styles.countLabel}> {counter} </div>
  
        <button className={`${styles.buttonAdd} ${className}`} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    );
  };