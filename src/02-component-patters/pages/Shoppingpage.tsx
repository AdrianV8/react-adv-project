
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components';



const product = {
  id: '1',
  title: 'Coffe Muck',
  img: './coffee-mug.png'
}

export const Shoppingpage = () => {
  return (
    <>
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ 
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
             }} >

              {/* //! FORMAS DE MOSTRAR LOS COMPONENTES */ }

              {/* COMPOUNT COMPONENT PATTERT */}
              <ProductCard product={ product }>
                  <ProductCard.Image/>
                  <ProductCard.Title title={'Coffe Muck'}/>
                  <ProductCard.Buttons/>
              </ProductCard>
              
              
              <ProductCard product={ product }>
                  <ProductImage/>
                  <ProductTitle title={''}/>
                  <ProductButtons/>
              </ProductCard>
            </div>
        </div>
    </>
  )
}
