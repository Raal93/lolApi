import { productBody } from "../../../models/models";
import ProductGalleryComponent from "../ProductGalleryComponent/ProductGalleryComponent";
import CartInterfaceComponent from "../CartInterface/CartInterfaceComponent";
import { Container, HeaderWrap, Header, AdditionalInfo, Brand, Rating, ContentWrap } from "./ProductDetailsCardComponent.styles";

interface Props {
  product: productBody
}

const ProductDetailsCardComponent = ({ product }: Props) => {
  const { brand, title, description, rating } = product;
  

  
  return <Container>
            <HeaderWrap>
                <Header>
                  {title} - {description}
                </Header>
                <AdditionalInfo>
                  <Brand>Brand: {brand}</Brand>
                  <Rating>Rating: {rating}/5</Rating>
                </AdditionalInfo>
            </HeaderWrap>
            <ContentWrap>
              <ProductGalleryComponent product={product} />
              <CartInterfaceComponent product={product}/>
            </ContentWrap>
         </Container>
         
}

export default ProductDetailsCardComponent;