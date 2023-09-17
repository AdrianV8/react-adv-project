import styles from "../style/styles.module.css";

// Se define el tipo directamente de la interfaz al ser solo un atributo
export const ProductTitle = ({ title }: { title: string }) => {

    return <span className={styles.productDescription}> { title ? title : 'Titulo no disponible' } </span>;
};