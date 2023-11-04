import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";
import ProductCardComponent from "../../components/molecules/ProductCard/ProductCardComponent";
import { PageContainer, ProductsCardsContainer, ProductsPageHeader } from "./LolItemListPage.styles";

const LolItemListPage = () => {

  const { getAllProducts, allProducts } = useAPI();

  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <PageContainer>
      <ProductsPageHeader>See our products</ProductsPageHeader>
      <ProductsCardsContainer>
        {
          allProducts?.map((product) => {
            return <ProductCardComponent key={product.id} product={product} />;
          } )
        }
      </ProductsCardsContainer>
    </PageContainer>
        );
      }

      export default LolItemListPage;