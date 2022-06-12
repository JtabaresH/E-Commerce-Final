import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
  name: 'cartProducts',
  initialState: [],
  reducers: {
    setCartProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCartProducts } = cartSlice.actions;

export const getCart = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then((res) => dispatch(setCartProducts(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addToCart = (product) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      'https://ecommerce-api-react.herokuapp.com/api/v1/cart',
      product,
      getConfig()
    )
    .then(() => dispatch(getCart()))
    .finally(() => dispatch(setIsLoading(false)));
};

export default cartSlice.reducer;
