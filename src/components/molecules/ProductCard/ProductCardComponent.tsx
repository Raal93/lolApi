import { productBody } from "../../../models/models";
import { ProductCardWrapper } from "./ProductCardComponent.styles";

interface Props {
  product: productBody
}

const productCard = ({ product:{ title, description, price} } : Props) => {
  

  return (
    <ProductCardWrapper>
      <div><img /></div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Cena: {price}$</p>
      </div>
    </ProductCardWrapper>
  )
}

export default productCard;