import { useLocation } from "react-router-dom";
import ProductDetailsCardComponent from "../../components/molecules/ProductDetailsCardComponent/ProductDetailsCardComponent";

const ProductDetailsPage = () => {

  const { state } = useLocation();
  const { product } = state;

  return (
    <>
      <ProductDetailsCardComponent key={product.title} product={product} />
    </>
  );
};

export default ProductDetailsPage;