import { productBody } from "../../../models/models";
import { ProductCardWrapper, ProductImage, ProductImageWrapper } from "./ProductCardComponent.styles";
import { useNavigate } from "react-router-dom";

interface Props {
  product: productBody
}

const productCardComponent = ({ product:{brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title} } : Props) => {
  
  const navigate = useNavigate();

  const productDetails = () => {
    navigate(`/products/${title}`, {state: {product: {brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title}}})
  }

  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage src={thumbnail} />
      </ProductImageWrapper>
      <div>
        <h4 onClick={productDetails}>{title}</h4>
        <p>{description}</p>
        <p>Cena: {price}$</p>
      </div>
    </ProductCardWrapper>
  )
}

export default productCardComponent;