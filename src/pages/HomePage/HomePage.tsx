import { PageContainer } from "./HomePage.styles";
import HeroContainerComponent from "../../components/organisms/HeroContainer/HeroContainerComponent"
import AboutSectionComponent from "../../components/organisms/AboutSection/AboutSectionComponent";
import ProductsHomeComponent from "../../components/organisms/ProductsHome/ProductsHomeComponent";

const HomePage = () => {
  return (
    <PageContainer>
      <HeroContainerComponent/>
      <AboutSectionComponent />
      <ProductsHomeComponent/>
   </PageContainer>
  )
}

export default HomePage;