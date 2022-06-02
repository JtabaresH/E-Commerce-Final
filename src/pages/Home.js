import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <span>Esta es página de inicio</span>
    </div>
  );
};

export default Home;
