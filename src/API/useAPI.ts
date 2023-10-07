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
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setAllProducts(data.products);
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