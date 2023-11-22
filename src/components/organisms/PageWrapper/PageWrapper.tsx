import { Wrapper, ContentWrapper, FooterWrapper } from "./PageWrapper.styles";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../Footer/FooterComponent";
import { GlobalProvider } from "../../../GlobalContext/GlobalContext";

const PageWrapper = ({children}: any) => {
  return (
    <Wrapper>
      <GlobalProvider>
        <HeaderComponent />
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <FooterWrapper>
          <FooterComponent />
        </FooterWrapper>
      </GlobalProvider>
    </Wrapper>
  )
}

export default PageWrapper;