import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../store/slices/products.slice';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => {
        const productSearched = res.data.find(
          (productItem) => productItem.id === Number(id)
        );
        setProduct(productSearched);
        dispatch(filterCategory(res.data.data?.product));
      });
  }, [dispatch, id]);

  return <h1>ProductDetail</h1>;
};

export default ProductDetail;
