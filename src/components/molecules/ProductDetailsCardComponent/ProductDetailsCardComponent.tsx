import { productBody } from "../../../models/models";
import { Container, HeaderWrap, Header, AdditionalInfo, Brand, Rating, Gallery, BigImageContainer, BigImage, SmallImagesWrapper, SmallImageContainer, SmallImage, CartInterface, PromoPrice, OffPromoPrice, ContentWrap, OffPrice, SaveInfo, Stock, InStock, SoldOut, DeliverInfo, BasketBtnRow, BuyBtn, SafetyInfoBlock, SafetyInfoList, SafetyInfoElement, SafetyInfoImportant} from "./ProductDetailsCardComponent.styles";

interface Props {
  product: productBody
}

const ProductDetailsCardComponent = ({ product:{brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title} } : Props) => {
  
  const calcOffPromoPrice = () => {
    return (price / (100 - discountPercentage) * 100).toFixed(2);
  }
  
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
                <Gallery>
                  <BigImageContainer>
                    <BigImage src={thumbnail}></BigImage>
                  </BigImageContainer>
                  <SmallImagesWrapper>
                    {images.map( (imgLink: string) => {
                      return <SmallImageContainer><SmallImage src={imgLink}></SmallImage></SmallImageContainer>
                    })}
                  </SmallImagesWrapper>
                </Gallery>
                <CartInterface>
                    <PromoPrice>{price}$</PromoPrice>
                    <OffPromoPrice>Most shown price: <OffPrice>{calcOffPromoPrice()}$</OffPrice></OffPromoPrice>
                    <SaveInfo>You save: {discountPercentage}%!</SaveInfo>
                    <Stock>{stock>0 ? (<InStock>In Stock!</InStock>): <SoldOut>Sold Out!</SoldOut>}</Stock>
                    <DeliverInfo>Ordered before 11:59 PM, delivered tomorrow!</DeliverInfo>
                    <BasketBtnRow><BuyBtn>ADD TO SHOPPING CART!</BuyBtn></BasketBtnRow>
                    <SafetyInfoBlock>
                      <SafetyInfoList>
                        <SafetyInfoElement>Order and pay via Superpupershop.xdd</SafetyInfoElement>
                        <SafetyInfoElement><SafetyInfoImportant>Free</SafetyInfoImportant> shipping over 20 euro, sent by Superpupershop.xdd</SafetyInfoElement>
                        <SafetyInfoElement><SafetyInfoImportant>Free</SafetyInfoImportant> collection at a Superpupershop.xdd collection point is possible</SafetyInfoElement>
                        <SafetyInfoElement>30 days' reflection period and <SafetyInfoImportant>free</SafetyInfoImportant> returns</SafetyInfoElement>
                        <SafetyInfoElement>Legal guarantee through {brand}</SafetyInfoElement>
                      </SafetyInfoList>
                    </SafetyInfoBlock>
                    Delivered today (order Mon-Fri before 12:00, delivery between 5:00 PM and 10:00 PM)
                    Also at home in the evening during the week
                    Also delivered on Sunday (order before Sat 11:59 PM)
                    View all delivery options
                </CartInterface>
              </ContentWrap>
         </Container>
         
}

export default ProductDetailsCardComponent;