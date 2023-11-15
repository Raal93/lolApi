import { Wrapper, ContentWrapper, FooterWrapper } from "./PageWrapper.styles";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const PageWrapper = ({children}: any) => {
  return (
    <Wrapper>
      <HeaderComponent/>
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <FooterWrapper>
        <FooterComponent />
      </FooterWrapper>
    </Wrapper>
  )
}

export default PageWrapper;