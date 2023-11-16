import styled from "styled-components";

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