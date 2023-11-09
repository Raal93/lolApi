import HomePage from "./pages/HomePage/HomePage";
import AboutSitePage from "./pages/AboutSitePage/AboutSitePage";
import LolItemListPage from "./pages/LolItemListPage/LolItemListPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ThemeWrapper from "./components/theme/ThemeWrapper";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <ThemeWrapper>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/aboutsite" element={<AboutSitePage />} />
          <Route index path="/itemlist" element={<LolItemListPage />} />
          <Route index path="/product/:id" element={<ProductDetailsPage />} />
          <Route index path="/*" element={<ErrorPage />} />
        </Routes>
      </ThemeWrapper>
    </Router>
  );
}

export default App;
