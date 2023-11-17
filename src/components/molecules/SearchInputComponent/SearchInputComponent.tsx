import { Input, Container, SearchForm } from "./SearchInputComponent.styles";
import { useState, useEffect } from "react";
import { useAPI } from "../../../API/useAPI";

const SearchInputComponent = () => {
  const [inputText, setInputText] = useState<any>();
  const { getAllProducts, allProducts } = useAPI();

  useEffect(() => { getAllProducts() }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const filteredProducts = allProducts?.filter((product) => {
      return (
        product.title.toLowerCase().includes(inputText) || 
        product.description.toLowerCase().includes(inputText) ||
        product.brand.toLowerCase().includes(inputText) ||
        product.category.toLowerCase().includes(inputText)
      )
    })

    console.log(filteredProducts);
  }

  const handleSearchChange = (e: any) => {
    setInputText(e.target.value);
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