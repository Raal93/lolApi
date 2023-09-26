import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import PageWrapper from "../organisms/PageWrapper/PageWrapper";

const ThemeWrapper = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper theme={theme}>
        {children}
      </PageWrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper;