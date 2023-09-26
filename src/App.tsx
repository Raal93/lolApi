// import { StyledButton } from "./App.styles"
// import React, { useState } from 'react';
import HomePage from "./pages/HomePage/HomePage"
import PageWrapper from "./components/organisms/PageWrapper/PageWrapper"
import { GlobalStyles } from "./components/theme/GlobalStyles";
import ThemeWrapper from "./components/theme/ThemeWrapper";

const App = () => {

  return (
    <div className="App">
      <ThemeWrapper>
        <HomePage />
      </ThemeWrapper>
    </div>
  );
}

export default App;
