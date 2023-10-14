import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";
import ProductCard from "../../components/molecules/ProductCard/ProductCardComponent";
import { PageContainer, ProductsCardsContainer, ProductsPageHeader } from "./LolItemListPage.styles";

const LolItemListPage = () => {

  const { getAllProducts, allProducts } = useAPI(); // wywołanie funkcji useApi ktora zwraca podane rzeczy // 

  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <PageContainer>
      <ProductsPageHeader>See our products</ProductsPageHeader>
      <ProductsCardsContainer>
        {
          allProducts == undefined ? (
            <div>allProduct is undefined</div>
          ) : (
            allProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
                } )
                )
              }
      </ProductsCardsContainer>
    </PageContainer>
        );
      }

      export default LolItemListPage;