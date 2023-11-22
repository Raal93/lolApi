import axios from "axios";
import { useState } from "react";
import { productBody, userBody } from "../models/models";

export const useAPI = () => {
  const [products, setProducts] = useState<productBody[]>([{
  brand: 'Default Brand',
  category: 'Default Category',
  description: 'Default Description',
  discountPercentage: 0,
  id: 0,
  images: [],
  price: 0,
  rating: 0,
  stock: 0,
  thumbnail: 'Default Thumbnail',
  title: 'Default Title',
  }]);
  const [allUsers, setAllUsers] = useState<userBody[]>();

  async function getProducts(): Promise<void>;
  async function getProducts(numberOfProducts: number): Promise<void>;

  async function getProducts(arg?: number): Promise<void> {
    const getProductsLink = arg
      ? `https://dummyjson.com/products?limit=${arg}`
      : 'https://dummyjson.com/products?limit=100';
    
    try {
    const response = await axios.get(getProductsLink);
    setProducts(response.data.products);
  } catch (error) {
    console.error(error);
  }
  }
  
  const getAllUsers = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setAllUsers(response.data.users);
    } catch (error) { return console.log(error) }
  }

  return {
    getProducts, products,
    getAllUsers, allUsers
  }
}