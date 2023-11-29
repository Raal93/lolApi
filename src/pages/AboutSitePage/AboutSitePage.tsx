import { useEffect } from 'react';

import { useAPI } from '../../API/useAPI';

const AboutSitePage = () => {
  const { getProducts, products } = useAPI();

  useEffect(() => {
    getProducts();
  }, []);

  const createAllCategories = () => {
    const allCategories: string[] = products.map((product) => {
      return product.category;
    });

    return [...new Set(allCategories)];
  };

  const displayAllCategories = () => {
    const allCategories = createAllCategories();

    return allCategories.map((category, id) => {
      return (
        <div key={id}>
          <span>
            {id + 1}: {category}
          </span>
        </div>
      );
    });
  };

  return <div>{displayAllCategories()}</div>;
};

export default AboutSitePage;
