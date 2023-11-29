import styled from 'styled-components';

export const HintWrapper = styled.div`
  background-color: transparent;
  position: absolute;
  width: 300px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const SuggestionList = styled.ul`
  margin: 0;
  padding: 10px 5px;
  list-style: none;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: green;
    z-index: -1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
