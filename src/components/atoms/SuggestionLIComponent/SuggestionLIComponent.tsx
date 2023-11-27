import { SuggestionLI } from "./SuggestionLIComponent.styles"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../GlobalContext/GlobalContext"
interface Props {
  word: string,
  setIsSearchHintShown: (value: boolean) => void,
  setSearchText: (value: string) => void
}

const SuggestionLIComponent = ({ word, setIsSearchHintShown, setSearchText }: Props) => {
  const navigate = useNavigate();
  const { setSearchInputTextGlobal } = useGlobalContext();

  const navigateToSearchResults = () => {
    setSearchInputTextGlobal(word);
    setIsSearchHintShown(false);
    setSearchText(word);
    navigate(`/products`, {});
}

  return <SuggestionLI onClick={navigateToSearchResults}> { word } </SuggestionLI>
}

export default SuggestionLIComponent;