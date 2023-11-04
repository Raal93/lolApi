import { Wrapper } from "./ProductsHomeComponent.styles";
import { useAPI } from "../../../API/useAPI";
import { useEffect } from "react";

const ProductsHomeComponent = () => {
  const { getExampleProducts, exampleProducts } = useAPI();
  useEffect(() => { getExampleProducts(), [] });


  return <Wrapper>{exampleProducts?.map((product) => {
    return <div>
      {product.id},
      {product.title}
    </div>
  })}</Wrapper>
}

export default ProductsHomeComponent;