import { PageContainer } from "./HomePage.styles";
import HeroContainerComponent from "../../components/organisms/HeroContainer/HeroContainerComponent"
import AboutSectionComponent from "../../components/organisms/AboutSection/AboutSectionComponent";

const HomePage = () => {
  return (
    <PageContainer>
      <HeroContainerComponent/>
      <AboutSectionComponent/>
   </PageContainer>
  )
}

export default HomePage;