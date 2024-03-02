import { useState } from "react";
import {
  useGetProductsQuery,
  useGetOneProductQuery,
} from "../../../config/RtkApi";

export const RtkDemo = () => {
  const [productId, setproductId] = useState(15)
  // const { data } = useGetProductsQuery();
  const { data } = useGetOneProductQuery(productId);
  // console.log(title)
  
  return (
    <>
      <h1> RTK PRODUCTS</h1>
      <hr />
      <h4>cargando...</h4>
      <pre>{!data ? <p>loading...</p> : `product number ${data.id} : ${data.title}`}</pre>
      <ul>
        {/* {!data ? (
          <p> not products </p>
        ) : (
          data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        )} */}
      </ul>
      <button onClick={()=> setproductId(productId - 1)}>anterior</button>
      <button onClick={()=> setproductId(productId + 1)}>siguiente</button>
    </>
  );
};
