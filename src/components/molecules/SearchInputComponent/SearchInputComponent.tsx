import { Input, Container, SearchForm, SubmitBtn } from "./SearchInputComponent.styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { useGlobalContext } from "../../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";
import SearchHintComponent from "../SearchHintComponent/SearchHintComponent";


const SearchInputComponent = () => {
  const { setSearchInputTextGlobal } = useGlobalContext();
  const [inputText, setInputText] = useState("");
  const [isSearchHintShown, setIsSearchHintShown] = useState(false);
  const navigate = useNavigate();

  const executeProductSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInputTextGlobal(inputText);
    navigate(`/products`, {});
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (e.target.value === "") {
      setSearchInputTextGlobal("");
      setIsSearchHintShown(false);
    } else {
      setIsSearchHintShown(true);
    }
  }

  return (
    <Container>
      <SearchForm onSubmit={(e) => executeProductSearch(e)}>
        <Input type="text" value={inputText} onChange={(e) => handleSearchChange(e)} />
        <SubmitBtn type="submit">Search</SubmitBtn>
      </SearchForm>
      {isSearchHintShown && <SearchHintComponent searchInputText={inputText} />}
    </Container>
  )
}

export default SearchInputComponent;