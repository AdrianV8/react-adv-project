
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components';
import '../style/custom-styles.css'


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
                  <ProductCard.Image className='custom-image'/>
                  <ProductCard.Title title={'Coffe Muck'} className='center'/>
                  <ProductCard.Buttons className='center'/>
              </ProductCard>
              
              
              <ProductCard 
                product={ product }
                className='bg-dark box-shadow'
              >
                  <ProductImage className='custom-image'/>
                  <ProductTitle className='text-white center'/>
                  <ProductButtons className='custom-button center'/>
              </ProductCard>
              
              <ProductCard 
                product={ product }
                style={{backgroundColor: '#70D1F8'}}
              >
                  <ProductImage/>
                  <ProductTitle/>
                  <ProductButtons style={{
                    display: 'flex', justifyContent: 'end'
                  }}/>
              </ProductCard>

            </div>
        </div>
    </>
  )
}
