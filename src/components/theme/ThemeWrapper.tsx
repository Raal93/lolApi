import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { GlobalStyles } from "./GlobalStyles";
import PageWrapper from "../organisms/PageWrapper/PageWrapper";

const ThemeWrapper = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        {children}
      </PageWrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper;