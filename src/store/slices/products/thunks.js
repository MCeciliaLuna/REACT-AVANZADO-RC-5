import { axiosDash } from "../../../config/axiosDash";
import { setProducts, errorMessage} from "./productsSlice";

export const getProducts = () => {
  return async (dispatch, getState) => {

    try {
      const { data } = await axiosDash("/products");
    const { products } = data;

    dispatch(
      setProducts({
        products
      })
    );
    } catch (error) {
      console.error(error)
      dispatch(errorMessage({
        errorMsg:{
          msg: error.response.data,
          type: error.response.status
        }
      }))
    }

    
};
}