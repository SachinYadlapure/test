import axios from 'axios';

export const getProducts =
  (keyword = '', categories) =>
  async dispatch => {
    try {
      dispatch({ type: 'getProductRequest' });

      let link = `https://fakestoreapi.com/products?keyword=${keyword}`;

      if (categories) {
        link = `https://fakestoreapi.com/products/category&category=${categories}`;
      }

      const { data } = await axios.get(link);

      dispatch({ type: 'getProductSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'getProductFail',
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetails = id => async dispatch => {
  try {
    dispatch({ type: 'productDetailsRequest' });

    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch({
      type: 'productDetailsSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'productDetailsFail',
      payload: error.response.data.message,
    });
  }
};
