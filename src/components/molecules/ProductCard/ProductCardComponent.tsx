import { productBody } from "../../../models/models";
import { ProductCardWrapper, ProductImage, ProductImageWrapper } from "./ProductCardComponent.styles";

interface Props {
  product: productBody
}

const productCardComponent = ({ product:{ title, description, price, images} } : Props) => {
  

  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage src={images[0]} />
      </ProductImageWrapper>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Cena: {price}$</p>
      </div>
    </ProductCardWrapper>
  )
}

export default productCardComponent;