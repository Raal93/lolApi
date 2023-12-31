import { useEffect } from 'react';

import { useAPI } from '../../API/useAPI';
import ProductCardComponent from '../../components/molecules/ProductCard/ProductCardComponent';
import { useGlobalContext } from '../../GlobalContext/GlobalContext';
import {
  PageContainer,
  ProductsCardsContainer,
  ProductsPageHeader,
} from './LolItemListPage.styles';

const LolItemListPage = () => {
  const { searchInputTextGlobal } = useGlobalContext();
  const { getProducts, products } = useAPI();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <PageContainer>
      <ProductsPageHeader>See our products</ProductsPageHeader>
      <ProductsCardsContainer>
        {products
          .filter((product) => {
            if (!searchInputTextGlobal) return true;
            const searchedText = searchInputTextGlobal.toLowerCase();

            const isSearchResultPositive =
              product.title.toLowerCase().includes(searchedText) ||
              product.description.toLowerCase().includes(searchedText) ||
              product.brand.toLowerCase().includes(searchedText) ||
              product.category.toLowerCase().includes(searchedText);

            return isSearchResultPositive;
          })
          .map((product) => {
            return <ProductCardComponent key={product.id} product={product} />;
          })}
      </ProductsCardsContainer>
    </PageContainer>
  );
};

export default LolItemListPage;
