import styled from "styled-components";

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