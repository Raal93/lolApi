import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: aliceblue;
  /* width: 90%; */
  text-align: center;
  padding: 1rem;
`

export const HeaderWrap = styled.header`
  width: 60%;
  margin: 20px auto;
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

export const Gallery = styled.section`
 
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
`