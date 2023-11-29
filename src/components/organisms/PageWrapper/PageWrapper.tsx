import { GlobalProvider } from '../../../GlobalContext/GlobalContext';
import FooterComponent from '../Footer/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { ContentWrapper, FooterWrapper, Wrapper } from './PageWrapper.styles';

const PageWrapper = ({ children }: any) => (
  <Wrapper>
    <GlobalProvider>
      <HeaderComponent />
      <ContentWrapper>{children}</ContentWrapper>
      <FooterWrapper>
        <FooterComponent />
      </FooterWrapper>
    </GlobalProvider>
  </Wrapper>
);

export default PageWrapper;
