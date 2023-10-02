
import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "../components";

import "../style/custom-styles.css";
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const Shoppingpage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <>
      <div style={{width:'80%'}}>
        <h1>Shopping Store</h1>
        <hr />

        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                className="bg-dark"
                product={product}
                onChange={onProductCountChange}
                value={ shoppingCart[product.id]?.count || 0 }
                
              >
                <ProductImage className="custom-image" />
                <ProductTitle
                  title={product.title}
                  className="text-white center"
                />
                <ProductButtons className="custom-button center" />
              </ProductCard>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="shopping-cart">
          
          {
            Object.entries(shoppingCart).map(( [key, productInCart] ) => (
              <ProductCard
              key={key}
              product={productInCart}
              className="bg-dark"
              style={{ width: "100px" }}
              value={ productInCart.count }
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-button center" />
            </ProductCard>
            ))
          }



        </div>

      </div>

    </>
  );
};
