import { Input, Container, SearchForm } from "./SearchInputComponent.styles";
import { useState } from "react";
import { useGlobalContext } from "../../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";


const SearchInputComponent = () => {
  const { globalInputText, setGlobalInputText } = useGlobalContext();
  const [inputText, setInputText] = useState<any>();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setGlobalInputText(inputText);
    navigate(`/products`, {})
  }

  const handleSearchChange = (e: any) => {
    setInputText(e.target.value);
    if(e.target.value === "") setGlobalInputText(inputText);
  }

  return (
    <Container>
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <Input type="text" value={inputText} onChange={(e)=>handleSearchChange(e)} />
      </SearchForm>
    </Container>
  )
}

export default SearchInputComponent;