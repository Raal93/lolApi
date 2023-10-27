import { HeroContainer, HeroH1, HeroParagraph } from "./HeroContainerComponent.styles"

const HeroContainerComponent = () => {
  return (
    <HeroContainer>
        <HeroH1>Nasz sklep jest wspaniały!</HeroH1>
        <HeroParagraph>Przeglądaj nasze przedmioty i kupuj je!</HeroParagraph>
      </HeroContainer>
  )
}

export default HeroContainerComponent;