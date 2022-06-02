import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { isLoading } from './isLoading.slice';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export default productsSlice.reducer;
