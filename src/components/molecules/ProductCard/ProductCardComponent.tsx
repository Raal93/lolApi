import { useNavigate } from 'react-router-dom';

import { productBody } from '../../../models/models';
import {
  ProductCardWrapper,
  ProductImage,
  ProductImageWrapper,
} from './ProductCardComponent.styles';

interface Props {
  product: productBody;
}

const productCardComponent = ({
  product: {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  },
}: Props) => {
  const navigate = useNavigate();

  const productDetails = () => {
    navigate(`/products/${title}`, {
      state: {
        product: {
          brand,
          category,
          description,
          discountPercentage,
          id,
          images,
          price,
          rating,
          stock,
          thumbnail,
          title,
        },
      },
    });
  };

  const handleEnterKeyPress = (event: { key: string }) => {
    event.key === 'Enter' && productDetails();
  };

  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage src={thumbnail} />
      </ProductImageWrapper>
      <div>
        <div
          onClick={productDetails}
          tabIndex={0}
          onKeyPress={handleEnterKeyPress}
          role="link"
        >
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <p>Cena: {price}$</p>
      </div>
    </ProductCardWrapper>
  );
};

export default productCardComponent;
