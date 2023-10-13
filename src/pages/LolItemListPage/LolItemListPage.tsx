import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";
import ProductCard from "../../components/molecules/ProductCard/ProductCardComponent";
import { PageContainer, ProductsCardsContainer } from "./LolItemListPage.styles";

const LolItemListPage = () => {

  const { getAllProducts, allProducts } = useAPI(); // wywołanie funkcji useApi ktora zwraca podane rzeczy // 

  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <PageContainer>
      <h1>Lista przedmiotów</h1>
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