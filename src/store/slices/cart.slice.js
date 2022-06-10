import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = favoritesSlice.actions;

export const getProducts = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then((res) => dispatch(setProducts(res.data.data.products)))
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
    .then(() => dispatch(getProducts()))
    .finally(() => dispatch(setIsLoading(false)));
};

export default cartSlice.reducer;
