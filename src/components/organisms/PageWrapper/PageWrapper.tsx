import { Wrapper, ContentWrapper } from "./PageWrapper.styles";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const PageWrapper = ({children}: any) => {
  return (
    <Wrapper>
      <HeaderComponent/>
      <ContentWrapper>
        {children}
      </ContentWrapper> 
      <FooterComponent/>
    </Wrapper>
  )
}

export default PageWrapper;