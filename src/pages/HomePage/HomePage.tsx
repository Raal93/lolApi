import AboutSectionComponent from '../../components/organisms/AboutSection/AboutSectionComponent';
import HeroContainerComponent from '../../components/organisms/HeroContainer/HeroContainerComponent';
import ProductsHomeComponent from '../../components/organisms/ProductsHome/ProductsHomeComponent';
import { PageContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <PageContainer>
      <HeroContainerComponent />
      <AboutSectionComponent />
      <ProductsHomeComponent />
    </PageContainer>
  );
};

export default HomePage;
