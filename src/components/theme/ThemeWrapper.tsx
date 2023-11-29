import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import PageWrapper from '../organisms/PageWrapper/PageWrapper';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './Theme';

interface PropsChildren {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: PropsChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>{children}</PageWrapper>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
