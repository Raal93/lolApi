import { productBody } from "../../../models/models";
import { Container, HeaderWrap, Header, AdditionalInfo, Brand, Rating, Gallery, BigImageContainer, BigImage, SmallImagesWrapper, SmallImageContainer, SmallImage, CartInterface, PromoPrice, OffPromoPrice, ContentWrap, OffPrice, SaveInfo, Stock, InStock, SoldOut, DeliverInfo, BasketBtnRow, BuyBtn, SafetyInfoBlock, InfoList, InfoElement, InfoImportant, DeliveryInfoBlock, Bold, ViewDeliveryOptions, CheckOtherProducts} from "./ProductDetailsCardComponent.styles";

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
                      <InfoList>
                        <InfoElement>Order and pay via Superpupershop.xdd</InfoElement>
                        <InfoElement><InfoImportant>Free</InfoImportant> shipping over 20 euro, sent by Superpupershop.xdd</InfoElement>
                        <InfoElement><InfoImportant>Free</InfoImportant> collection at a Superpupershop.xdd collection point is possible</InfoElement>
                        <InfoElement>30 days' reflection period and <InfoImportant>free</InfoImportant> returns</InfoElement>
                        <InfoElement>Legal guarantee through {brand}</InfoElement>
                      </InfoList>
                    </SafetyInfoBlock>
                    <CheckOtherProducts>Check other products from category {category}.</CheckOtherProducts>
                    <DeliveryInfoBlock>
                      <InfoList>
                        <InfoElement>Delivered <Bold>today</Bold> (order Mon-Fri before 12:00, delivery between 5:00 PM and 10:00 PM)</InfoElement>
                        <InfoElement>Also at home in the <Bold>evening</Bold> during the week</InfoElement>
                        <InfoElement>Also delivered on <Bold>Sunday</Bold> (order before Sat 11:59 PM)</InfoElement>
                      </InfoList>
                      <ViewDeliveryOptions>View all delivery options &nbsp;&gt;&gt;</ViewDeliveryOptions>
                    </DeliveryInfoBlock>
                </CartInterface>
              </ContentWrap>
         </Container>
         
}

export default ProductDetailsCardComponent;