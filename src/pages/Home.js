import React, { useEffect } from 'react';
import { getProducts } from '../store/slices/products.slice';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProducts());
}, []);

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <span>Esta es la inicio</span>
    </div>
  );
};

export default Home;
