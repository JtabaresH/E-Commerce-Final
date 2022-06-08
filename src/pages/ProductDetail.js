import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../store/slices/products.slice';

const ProductDetail = () => {
  const [products, setProducts] = useState({});
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
        setProducts(productSearched);
        dispatch(filterCategory(productSearched.category.id));
      });
  }, [dispatch, id]);

  /* console.log(product); */

  return (
    <div className="card">
      <h1>ProductDetail</h1>
      <h1>{products.title}</h1>
      {productsList.map((productList) => (
        <li
          onClick={() => navigate(`/products/${productList.id}`)}
          key={productList.id}
        >
          {productList.title}
        </li>
      ))}
    </div>
  );
};

export default ProductDetail;
