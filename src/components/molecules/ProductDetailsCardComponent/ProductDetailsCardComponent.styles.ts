import styled from 'styled-components';

export const Container = styled.main`
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.header`
  margin: 20px auto;
  flex: 1;
`;

export const Header = styled.h1`
  color: #03031a;
  font-family: produkt, arial, helvetica, sans-serif;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 1rem;
  font-size: 1.25rem; // (20px)
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const Brand = styled.span``;

export const Rating = styled.span``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
