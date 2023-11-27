import { SuggestionLI } from "./SuggestionLIComponent.styles"
interface Props { word: string }

const SuggestionLIComponent = ({ word }: Props) => {

  return <SuggestionLI> { word } </SuggestionLI>
}

export default SuggestionLIComponent;