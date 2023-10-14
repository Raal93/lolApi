import styled from 'styled-components'

export const PageContainer = styled.main`
  margin: 25px;
`

export const ProductsCardsContainer = styled.section`
  /* display: grid; */
  /* zrobić gridem (lub połączyć): 3 kolumny/2 /1, */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

export const ProductsPageHeader = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0 0 20px 0; /* góra, prawa, dół, lewa */
  padding: 0;
`