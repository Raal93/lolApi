import { useAPI } from "../../API/useAPI";
import { useEffect, useContext } from "react";
import ProductCardComponent from "../../components/molecules/ProductCard/ProductCardComponent";
import { PageContainer, ProductsCardsContainer, ProductsPageHeader } from "./LolItemListPage.styles";
// import SearchInputComponent from "../../components/molecules/SearchInputComponent/SearchInputComponent";

const LolItemListPage = () => {

  const { getAllProducts, allProducts } = useAPI();
  // const { inputext } = useContext<any>(SearchInputComponent);

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