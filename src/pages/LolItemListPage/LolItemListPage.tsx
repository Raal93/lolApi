import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";
import ProductCardComponent from "../../components/molecules/ProductCard/ProductCardComponent";
import { PageContainer, ProductsCardsContainer, ProductsPageHeader } from "./LolItemListPage.styles";
import { useGlobalContext } from "../../GlobalContext/GlobalContext";

const LolItemListPage = () => {
  const { globalInputText } = useGlobalContext();
  const { getAllProducts, allProducts } = useAPI();
  useEffect(() => { getAllProducts(); }, []);

  return (
    <PageContainer>
      <ProductsPageHeader>See our products</ProductsPageHeader>
      <ProductsCardsContainer>
        {
          allProducts?.filter((product) => {
            if (!globalInputText) return true;
            const searchedText = globalInputText.toLowerCase();

            const isSearchResultPositive =
              product.title.toLowerCase().includes(searchedText) ||
              product.description.toLowerCase().includes(searchedText) ||
              product.brand.toLowerCase().includes(searchedText) ||
              product.category.toLowerCase().includes(searchedText);
            
            return isSearchResultPositive;
          }).map((product) => {
            return <ProductCardComponent key={product.id} product={product} />;
          })
        }
      </ProductsCardsContainer>
    </PageContainer>
        );
      }

      export default LolItemListPage;