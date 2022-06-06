import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterTypeProduct } from '../store/slices/products.slice';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/`)
      .then((res) => {
        const productSearched = res.data.find(
          (productItem) => productItem.id === Number(id)
        );
        console.log(productSearched);
        /* setProduct(productSearched);
        dispatch(filterCategory(res.data)); */
      });
  }, [dispatch, id]);

  console.log(product);

  return (
    <div className="card">
      <h1>ProductDetail</h1>
      <h1>{product.data?.product.title}</h1>
    </div>
  );
};

export default ProductDetail;
