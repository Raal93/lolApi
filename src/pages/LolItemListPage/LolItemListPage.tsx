import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";

const LolItemListPage = () => {

  const { getAllProducts, allProducts } = useAPI(); // wywołanie funkcji useApi ktora zwraca podane rzeczy // 

  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <div>
      <h1>Lista przedmiotów</h1>
      <div>
        {
          allProducts == undefined ? (
            <div>allProduct is undefined</div>
          ) : (
            allProducts.map((product) => {
            return <p key={product.id}>{product.title}</p>;
          } )
          )
        }
      </div>
    </div>
  );
}

export default LolItemListPage;