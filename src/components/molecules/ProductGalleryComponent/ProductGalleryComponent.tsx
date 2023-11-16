import { productBody } from "../../../models/models";
import { Gallery, BigImageContainer, BigImage, SmallImagesWrapper, SmallImageContainer, SmallImage } from "./ProductGalleryComponent.styles";

interface Props {
  product: productBody;
}

const ProductGalleryComponent = ({ product }: Props) => {
  return (
    <Gallery>
      <BigImageContainer>
        <BigImage src={product.thumbnail}></BigImage>
      </BigImageContainer>
      <SmallImagesWrapper>
        {product.images.map((imgLink, id) => {
          return <SmallImageContainer key={id}><SmallImage src={imgLink}></SmallImage></SmallImageContainer>
        })}
      </SmallImagesWrapper>
    </Gallery>
  )
}
        
  export default ProductGalleryComponent;