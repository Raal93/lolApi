import { Input, Container, SearchForm, SubmitBtn } from "./SearchInputComponent.styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { useGlobalContext } from "../../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";


const SearchInputComponent = () => {
  const { setGlobalInputText } = useGlobalContext();
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const submitProductSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalInputText(inputText);
    navigate(`/products`, {});
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if(e.target.value === "") setGlobalInputText("");
  }

  return (
    <Container>
      <SearchForm onSubmit={(e) => submitProductSearch(e)}>
        <Input type="text" value={inputText} onChange={(e) => handleSearchChange(e)} />
        <SubmitBtn type="submit">Search</SubmitBtn>
      </SearchForm>
    </Container>
  )
}

export default SearchInputComponent;