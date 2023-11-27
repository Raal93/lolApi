import { PageContainer, ProductsCardsContainer } from "./ProductsHomeComponent.styles";
import { useAPI } from "../../../API/useAPI";
import { useEffect } from "react";
import ProductCardComponent from "../../molecules/ProductCard/ProductCardComponent";

const productsAtHomepage = 6;

const ProductsHomeComponent = () => {1

  const { getProducts, products } = useAPI();
  useEffect(() => { getProducts(productsAtHomepage) }, []);


  return (
    <PageContainer>
      <ProductsCardsContainer>
        {products.map((product) => {
          return <ProductCardComponent key={product.id} product={product} />
        })}
      </ProductsCardsContainer>
    </PageContainer>
  )
  
}

export default ProductsHomeComponent;