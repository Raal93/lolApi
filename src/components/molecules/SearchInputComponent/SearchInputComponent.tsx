import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../GlobalContext/GlobalContext';
import SearchHintComponent from '../SearchHintComponent/SearchHintComponent';
import { Container, Input, SearchForm, SubmitBtn } from './SearchInputComponent.styles';

const SearchInputComponent = () => {
  const { setSearchInputTextGlobal } = useGlobalContext();
  const [searchText, setSearchText] = useState('');
  const [isSearchHintShown, setIsSearchHintShown] = useState(false);
  const navigate = useNavigate();

  const executeProductSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInputTextGlobal(searchText);
    navigate(`/products`, {});
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      setSearchInputTextGlobal('');
      setIsSearchHintShown(false);
    } else {
      setIsSearchHintShown(true);
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={(e) => executeProductSearch(e)}>
        <Input
          type="text"
          value={searchText}
          onChange={(e) => handleSearchChange(e)}
          onFocus={() => setIsSearchHintShown(true)}
        />
        <SubmitBtn type="submit">Search</SubmitBtn>
      </SearchForm>
      {isSearchHintShown && (
        <SearchHintComponent
          searchInputText={searchText}
          setIsSearchHintShown={setIsSearchHintShown}
          setSearchText={setSearchText}
        />
      )}
    </Container>
  );
};

export default SearchInputComponent;
