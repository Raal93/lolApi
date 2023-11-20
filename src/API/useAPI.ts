import axios from "axios";
import { useState } from "react";
import { productBody, userBody } from "../models/models";

export const useAPI = () => {
  const [allProducts, setAllProducts] = useState<productBody[]>();
  const [allUsers, setAllUsers] = useState<userBody[]>();
  const [exampleProducts, setExampleProducts] = useState<productBody[]>();

  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=100');
      // console.log(allProducts);
      setAllProducts(response.data.products);
    } catch (error) { return console.log(error) }
  }
  
  const getAllUsers = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      // console.log(response.data.users)
      setAllUsers(response.data.users);
    } catch (error) { return console.log(error) }
  }

  const getExampleProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=6');
      setExampleProducts(response.data.products);
    } catch (error) { return console.log(error) }
  }

  return {
    getAllProducts, allProducts,
    getAllUsers, allUsers,
    getExampleProducts, exampleProducts
  }
}