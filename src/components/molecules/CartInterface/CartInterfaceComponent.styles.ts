import styled from "styled-components";

export const CartInterface = styled.section`
  flex: 1;
`

export const PromoPrice = styled.div`
  font-family: arial, helvetica, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #f91906;
`

export const OffPromoPrice = styled.div`
font-size: 1.25rem;
font-weight: 300;

`

export const OffPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  position: relative;
  display: inline-block;
  color: gray;

  &::after {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: red;
    opacity: 80%;
  }
`

export const SaveInfo = styled.div`
  font-size: 1.25rem;
`

export const Stock = styled.div`
font-size: 1.5rem;
`

export const InStock = styled.span`
  color: green;
  font-weight: 700;
`

export const SoldOut = styled.span`
  color: red;
`

export const DeliverInfo = styled.div`
  color: green;
  font-size: 1rem;
`

export const BasketBtnRow = styled.div`
`

export const SafetyInfoBlock = styled.div`
`

export const InfoList = styled.ul`
  list-style-type: none;
`

export const InfoElement = styled.li`
  padding-left: 1.5rem;
  margin-bottom: 0.25rem;
  text-align: left;
  position: relative;
  padding-left: 20px; 

  &::before {
    content: '✓'; /* Unicode dla ptaszka */
    position: absolute;
    left: 0;
  }
`
export const InfoImportant = styled.span`
  font-weight: 700;
  color: green;  
`

export const DeliveryInfoBlock = styled.div`
`

export const Bold = styled.span`
  font-weight: 700;
`

export const ViewDeliveryOptions = styled.div`
`

export const CheckOtherProducts = styled.div`
  padding: 30px 0;
`