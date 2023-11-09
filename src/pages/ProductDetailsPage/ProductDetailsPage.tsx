import React from 'react';
import { RouteComponentProps } from 'react-router';

interface ProductDetailsProps extends RouteComponentProps<{ id: string }> {
  // Dodaj inne typy props, jeśli są potrzebne
}

const ProductDetailsPage: React.FC<ProductDetailsProps> = (props) => {
  const productId = props.match.params.id;

  // Teraz możesz użyć productId do ładowania danych produktu itp.

  return (
    <div>
      <h2>Details for Product {productId}</h2>
      {/* Reszta zawartości */}
    </div>
  );
};

export default ProductDetailsPage;