import { productBody } from "../../../models/models";
import BuyBtnComponent from "../../atoms/BuyBtn/BuyBtnComponent";
import { CartInterface, PromoPrice, OffPromoPrice, OffPrice, SaveInfo, Stock, InStock, SoldOut, DeliverInfo, BasketBtnRow, SafetyInfoBlock, InfoList, InfoElement, InfoImportant, CheckOtherProducts, DeliveryInfoBlock, Bold, ViewDeliveryOptions} from "./CartInterfaceComponent.styles";

interface Props {
  product: productBody
}

const CartInterfaceComponent = ({ product: {price, discountPercentage, stock, brand, category } }: Props) => {
    
  const calcPriceBeforeDiscount = () => {
    const discountFraction = discountPercentage / 100;
    const newPriceFraction = 1 - discountFraction;
    const numbersAfterDecimalPoint = 2;
    
    return (price / newPriceFraction).toFixed(numbersAfterDecimalPoint);
  }

  const IsProductInStock = stock > 0;

  return <CartInterface>
                    <PromoPrice>{price}$</PromoPrice>
                    <OffPromoPrice>Most shown price: <OffPrice>{calcPriceBeforeDiscount()}$</OffPrice></OffPromoPrice>
                    <SaveInfo>You save: {discountPercentage}%!</SaveInfo>
                    <Stock>
                      {IsProductInStock ? <InStock>In Stock!</InStock> : <SoldOut>Sold Out!</SoldOut>}
                    </Stock>
                    <DeliverInfo>Ordered before 11:59 PM, delivered tomorrow!</DeliverInfo>
                    <BasketBtnRow><BuyBtnComponent /></BasketBtnRow>
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
}

export default CartInterfaceComponent;