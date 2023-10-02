import { Product } from '../interfaces/productInterfaces';

const product1 = {
    id: "1",
    title: "Coffe Muck",
    img: "./coffee-mug.png",
};
const product2 = {
    id: "2",
    title: "Coffe Muck - Meme",
    img: "./coffee-mug2.png",
};

// ARRAY DE PRODUCTOS
export const products: Product[] = [product1, product2];