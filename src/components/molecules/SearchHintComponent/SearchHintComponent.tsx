import { HintWrapper, SuggestionList } from "./SearchHintComponent.styles"
import { useAPI } from "../../../API/useAPI";
import { useEffect, useMemo } from "react";
import SuggestionLIComponent from "../../atoms/SuggestionLIComponent/SuggestionLIComponent";
interface Props { searchInputText: string }

const SearchHintComponent = ({ searchInputText }: Props) => {
  const { getProducts, products } = useAPI();
  useEffect(() => { getProducts()}, []);

  const createAllWordsList = () => {
    const allWords = new Set(
    products
      .flatMap(product => [
        ...product.title.split(/[.,;:!?()\s-/_]+/),
        ...product.brand.split(/[.,;:!?()\s-/_]+/),
        ...product.description.split(/[.,;:!?()\s-/_]+/),
        ...product.category.split(/[.,;:!?()\s-/_]+/)
      ])
      .filter(word => word.length >= 4 && !/\d/.test(word))
      .map(word => word.toLowerCase())
  );
  return [...allWords];
};

  const createSearchSuggestions = () => {
    const allWordList = createAllWordsList();
    const matchedWordsStartWith = allWordList.filter(word => word.startsWith(searchInputText));
    const reducedWordList = matchedWordsStartWith.slice(0, 10);
    return reducedWordList.map(word => <SuggestionLIComponent key={word} word={word}></SuggestionLIComponent>);
  }
  
  return (
    <HintWrapper>
      <SuggestionList>
        {createSearchSuggestions()}
      </SuggestionList>
    </HintWrapper>  
  ) 
}

export default SearchHintComponent;