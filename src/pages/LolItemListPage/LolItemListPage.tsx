import { useAPI } from "../../API/useAPI";
import { useEffect, useContext } from "react";
import ProductCardComponent from "../../components/molecules/ProductCard/ProductCardComponent";
import { PageContainer, ProductsCardsContainer, ProductsPageHeader } from "./LolItemListPage.styles";
// import SearchInputComponent from "../../components/molecules/SearchInputComponent/SearchInputComponent";
import { useGlobalContext } from "../../GlobalContext/GlobalContext";


const LolItemListPage = () => {
  const { globalInputText } = useGlobalContext();

  const { getAllProducts, allProducts } = useAPI();
  // const { inputext } = useContext<any>(SearchInputComponent);

  useEffect(() => {
    getAllProducts();
  }, [])


  return (
    <PageContainer>
      <ProductsPageHeader>See our products</ProductsPageHeader>
      <ProductsCardsContainer>
        {
          allProducts?.filter((product) => {
      return (
        product.title.toLowerCase().includes(globalInputText) || 
        product.description.toLowerCase().includes(globalInputText) ||
        product.brand.toLowerCase().includes(globalInputText) ||
        product.category.toLowerCase().includes(globalInputText)
      )
    }).map((product) => {
            return <ProductCardComponent key={product.id} product={product} />;
          } )
        }
      </ProductsCardsContainer>
    </PageContainer>
        );
      }

      export default LolItemListPage;