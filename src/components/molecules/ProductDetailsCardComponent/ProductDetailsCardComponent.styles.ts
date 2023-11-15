import styled from 'styled-components';


export const Container = styled.main`
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  
`

export const HeaderWrap = styled.header`
  /* width: 60%; */
  margin: 20px auto;
  flex: 1;
`

export const Header = styled.h1`
  color: #03031a;
  font-family: produkt,arial,helvetica,sans-serif;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 1rem;
  font-size: 1.25rem; // (20px)
`

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`

export const Brand = styled.span`
`

export const Rating = styled.span`
`

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
@media (min-width: 1000px) {
  flex-direction: row;
}
`

export const Gallery = styled.section`
  flex: 1;
`

export const BigImageContainer = styled.div`
`

export const BigImage = styled.img`
`

export const SmallImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`

export const SmallImageContainer = styled.div`
  width: 30%;
  display: flex;
  max-width: 250px;
  max-height: 250px;
  margin: 5px 10px;
`

export const SmallImage = styled.img`
  width: 100%;
  object-fit: contain;
`

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

export const BuyBtn = styled.button`
    color: #03031a;
    background-color: #febd00;
    border-color: #febd00;
    box-shadow: 0 4px 0-2px rgba(3,3,26,.25);
    font-size: 14px;
    font-weight: 400;
    line-height: calc(3rem - 2px);
    text-align: center;
    text-decoration: none;
    height: 3rem;
    padding: 0 calc(1rem - 1px);
    margin-top: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;

    &:hover {
      color: #03031a;
      background-color: #fed600;
      border-color: #fed600;
      box-shadow: 0 4px 0-2px rgba(3,3,26,.25);
    }
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