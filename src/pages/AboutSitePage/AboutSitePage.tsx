import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";

const AboutSitePage = () => {

  const { getProducts, products } = useAPI();

  useEffect(() => {
    getProducts(100);
  }, [])

  const createAllCategories = () => {
    const allCategories: string[] = products.map(product => {
      return product.category;
    });

    return [...new Set(allCategories)];
  }

  const displayAllCategories = () => {
    const allCategories = createAllCategories();

    return allCategories.map((category, id) => {
          return (
            <div key={id}>
              <span>{id + 1}: {category}</span>
            </div>
          )
        })
  }

  return (
    <div>
      {
        displayAllCategories()
      }
    </div>
  );
}

export default AboutSitePage;