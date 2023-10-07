import axios from "axios";
import { useState } from "react";

interface productBody {
  id: number,
  title: string,
  description: string
}

export const useAPI = () => {
  const [allProducts, setAllProducts] = useState<productBody[]>();

  
  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const allProducts = response.data.products;
      // console.log(allProducts);
      setAllProducts(allProducts);
    }
    catch (error) {
      return console.log(error);
    }
  }

  return {
    getAllProducts, 
    allProducts
  }
}