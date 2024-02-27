import { axiosDash } from "../../../config/axiosDash";
import { setProducts } from "./productsSlice";

export const getProducts = () => {
  return async (dispatch, getState) => {
    const { data } = await axiosDash("/products");
    const { products } = data;

    dispatch(
      setProducts({
        products
      })
    );
  };
};
