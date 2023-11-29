import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ThemeWrapper from './components/theme/ThemeWrapper';
import AboutSitePage from './pages/AboutSitePage/AboutSitePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import LolItemListPage from './pages/LolItemListPage/LolItemListPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';

const App = () => {
  return (
    <Router>
      <ThemeWrapper>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/aboutsite" element={<AboutSitePage />} />
          <Route index path="/products" element={<LolItemListPage />} />
          <Route index path="/products/:id" element={<ProductDetailsPage />} />
          <Route index path="/*" element={<ErrorPage />} />
        </Routes>
      </ThemeWrapper>
    </Router>
  );
};

export default App;
