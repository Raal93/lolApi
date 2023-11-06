import { Wrapper } from "./ProductsHomeComponent.styles";
import { useAPI } from "../../../API/useAPI";
import { useEffect } from "react";
import ProductCardComponent from "../../molecules/ProductCard/ProductCardComponent";

const ProductsHomeComponent = () => {
  const { getExampleProducts, exampleProducts } = useAPI();
  useEffect(() => { getExampleProducts(), [] });


  return <Wrapper>{exampleProducts?.map((product) => {
    return <ProductCardComponent key={product.id} product={product} />
  })}</Wrapper>
}

export default ProductsHomeComponent;