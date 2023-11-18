import { Input, Container, SearchForm } from "./SearchInputComponent.styles";
import { useState, useEffect, createContext, useContext } from "react";
import { useAPI } from "../../../API/useAPI";
import { useGlobalContext } from "../../../GlobalContext/GlobalContext";



const SearchInputComponent = () => {
  const { globalInputText, setGlobalInputText } = useGlobalContext();
  // const [inputText, setInputText] = useState<any>();
  const { getAllProducts, allProducts } = useAPI();

  useEffect(() => { getAllProducts() }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const filteredProducts = allProducts?.filter((product) => {
      return (
        product.title.toLowerCase().includes(globalInputText) || 
        product.description.toLowerCase().includes(globalInputText) ||
        product.brand.toLowerCase().includes(globalInputText) ||
        product.category.toLowerCase().includes(globalInputText)
      )
    })

    console.log(filteredProducts);
  }

  const handleSearchChange = (e: any) => {
    setGlobalInputText(e.target.value);
  }

  return (
    <Container>
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <Input type="text" value={globalInputText} onChange={(e)=>handleSearchChange(e)} />
      </SearchForm>
    </Container>
  )
}

export default SearchInputComponent;