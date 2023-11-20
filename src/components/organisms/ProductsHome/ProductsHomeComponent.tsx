import { PageContainer, ProductsCardsContainer } from "./ProductsHomeComponent.styles";
import { useAPI } from "../../../API/useAPI";
import { useEffect } from "react";
import ProductCardComponent from "../../molecules/ProductCard/ProductCardComponent";

const ProductsHomeComponent = () => {
  const { getExampleProducts, exampleProducts } = useAPI();
  useEffect(() => { getExampleProducts(), [] });


  return (
    <PageContainer>
      <ProductsCardsContainer>
        {exampleProducts?.map((product) => {
          return <ProductCardComponent key={product.id} product={product} />
        })}
      </ProductsCardsContainer>
    </PageContainer>
  )
  
}

export default ProductsHomeComponent;