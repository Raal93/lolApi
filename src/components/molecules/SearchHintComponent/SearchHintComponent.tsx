import { HintWrapper } from "./SearchHintComponent.styles"
import { useAPI } from "../../../API/useAPI";
import { useEffect } from "react";

interface Props {
     searchInputText: string;
}

const SearchHintComponent = ({ searchInputText }: Props) => {
  const { getProducts, products } = useAPI();
  useEffect(() => { getProducts() }, []);

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
}

  const createMatchedWordListStartWith = (allWords:string[]) => {
    return allWords.filter(word => word.startsWith(searchInputText));
  }

  
  const reduceWordList = (wordList: string[]) => {
    return wordList.slice(0, 10);
  }
  
  const createSearchSuggestions = () => {
    const allWordsList = createAllWordsList();
    // console.log(allWordsList);

    // 2 zredukuj tablicę aby zachowała tylko słowa które przechodzą przez filtr
    const matchedWordsListStartWith = createMatchedWordListStartWith(allWordsList);
    // console.log(matchedWordsListStartWith);

    // 3 ogranicz rozmiar tablicy do 10
    const reducedWordList = reduceWordList(matchedWordsListStartWith);


    // 4 wyswietl liste slow
    return reducedWordList.map(word => <li key={word}>{word}</li>)
  }
  
  return (
    <HintWrapper>
      <ul>
        {createSearchSuggestions()}
      </ul>
    </HintWrapper>  
  ) 
}

export default SearchHintComponent;