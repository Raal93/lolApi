import { ReactNode } from 'react';

import { GlobalProvider } from '../../../GlobalContext/GlobalContext';
import FooterComponent from '../Footer/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { ContentWrapper, FooterWrapper, Wrapper } from './PageWrapper.styles';

interface ChildrenProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: ChildrenProps) => (
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
