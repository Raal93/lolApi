import { useLocation } from 'react-router-dom';

import ProductDetailsCardComponent from '../../components/molecules/ProductDetailsCardComponent/ProductDetailsCardComponent';

const ProductDetailsPage = () => {
  const { state } = useLocation();
  const { product } = state;

  return <ProductDetailsCardComponent product={product} />;
};

export default ProductDetailsPage;
