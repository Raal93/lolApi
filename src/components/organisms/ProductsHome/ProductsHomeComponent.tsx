import { useEffect } from 'react';

import { useAPI } from '../../../API/useAPI';
import ProductCardComponent from '../../molecules/ProductCard/ProductCardComponent';
import { PageContainer, ProductsCardsContainer } from './ProductsHomeComponent.styles';

const productsAtHomepage = 6;

const ProductsHomeComponent = () => {
  const { getProducts, products } = useAPI();
  useEffect(() => {
    getProducts(productsAtHomepage);
  }, []);

  return (
    <PageContainer>
      <ProductsCardsContainer>
        {products.map((product) => {
          return <ProductCardComponent key={product.id} product={product} />;
        })}
      </ProductsCardsContainer>
    </PageContainer>
  );
};

export default ProductsHomeComponent;
