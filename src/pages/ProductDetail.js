import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../store/slices/products.slice';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsList = useSelector((state) => state.products);

  useEffect(() => {
    axios
      .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
      .then((res) => {
        const productSearched = res.data.data.products.find(
          (productsItem) => productsItem.id === Number(id)
        );
        console.log(productSearched);
        setProducts(productSearched);
        dispatch(filterCategory(productSearched.category.id));
      });
  }, [dispatch, id]);

  /* console.log(product); */

  return (
    <div className="card">
      <h1>ProductDetail</h1>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetail;
