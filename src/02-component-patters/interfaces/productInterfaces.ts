
import { TitleProps } from '../components/ProductTitle';
import { ImageProps } from '../components/ProductImage';
import { ButtonsProps } from '../components/ProductButtons';
import { ProductCardProps } from '../components/ProductCard';


export interface Product {
    id: string; // id and title required,  img optional
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ( Props: TitleProps) => JSX.Element,
    Image: ( Props: ImageProps) => JSX.Element,
    Buttons: (Props: ButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product, 
    count: number
}

export interface ProductInCart extends Product {
    count: number;
  }