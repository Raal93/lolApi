import { productBody } from "../../../models/models";
import { Wrapper, HeaderWrap, Header, AdditionalInfo, Brand, Rating, Gallery, BigImageContainer, BigImage, SmallImagesWrapper, SmallImageContainer, SmallImage, CartInterface } from "./ProductDetailsCardComponent.styles";

interface Props {
  product: productBody
}

const ProductDetailsCardComponent = ({ product:{brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title} } : Props) => {
  return <Wrapper>
            <HeaderWrap>
              <Header>
                {title} - {description}
              </Header>
              <AdditionalInfo>
                <Brand>Brand: {brand}</Brand>
                <Rating>Rating: {rating}/5</Rating>
              </AdditionalInfo>
            </HeaderWrap>
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
                Price: {price}$
                Most shown price: {price/(100 - discountPercentage)*100}$
                You save: {discountPercentage}%!
                {stock>0 ? "In Stock!": "Sold Out!"}
                Ordered before 11:59 PM, delivered tomorrow!
                ADD TO SHOPPING CART!
                Order and pay via Superpupershop.xdd
                Including shipping costs, sent by Superpupershop.xdd
                Collection at a Superpupershop.xdd collection point is possible
                30 days' reflection period and free returns
                Legal guarantee through {brand}
                Delivered today (order Mon-Fri before 12:00, delivery between 5:00 PM and 10:00 PM)
                Also at home in the evening during the week
                Also delivered on Sunday (order before Sat 11:59 PM)
                View all delivery options
            </CartInterface>
         </ Wrapper>
}

export default ProductDetailsCardComponent;