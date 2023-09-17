import { ReactElement } from 'react';

// product must be 'Product' type
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]; // Puede que llegue un solo hijo o que lleguen un arreglo de varios
}

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
    Title: ({ title }: { title: string }) => JSX.Element,
    Image: ({ img }: { img?: string | undefined }) => JSX.Element,
    Buttons: () => JSX.Element
}