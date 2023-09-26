import { CSSProperties } from 'react';

import styles from "../style/styles.module.css";

// Al haber más de dos props, se crea una interfaz para que sea más sencillo
export interface TitleProps {
    title?: string; 
    className?: string;
    style?: CSSProperties;
}


// Se define el tipo directamente de la interfaz al ser solo un atributo
export const ProductTitle = ({ title, className, style }: TitleProps) => {

    return <span
            style={style}
            className={`${styles.productDescription} ${className}`}> { title ? title : 'Titulo no disponible' } 
        </span>;
};