import { ThemeProvider } from 'styled-components';

import PageWrapper from '../organisms/PageWrapper/PageWrapper';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './Theme';

const ThemeWrapper = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>{children}</PageWrapper>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
