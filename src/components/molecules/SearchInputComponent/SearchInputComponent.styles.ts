import styled from "styled-components";

export const Container = styled.div`
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  width: 300px;
  font-size: 16px;
  background-color: rgb(253,245,150);
`

export const SubmitBtn = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: #45a049;
  }
`