import axios from 'axios';

//Add Items to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.post(
    `https://fakestoreapi.com/products/${id}`,

    {
      withCredentials: true,
    }
  );

  dispatch({
    type: 'addToCart',
    payload: {
      product: data.product.productId,
      name: data.product.title,
      price: data.product.price,
      quantity,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
