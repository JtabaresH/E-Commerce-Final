import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, filterTypeProduct } from '../store/slices/products.slice';
import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());

    axios
      .get(
        'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/'
      )
      .then((res) => setCategories(res.data.data?.categories));
  }, []);

  const filterProduct = () => {
    dispatch(filterTypeProduct(search));
  };

  const selectCategory = (id) => {
    dispatch(filterProduct(id));
  };

  return (
    <div className="container">
      <h1>Home</h1>

      <div className="list-group">
        {categories.map((category) => (
          <div
            className="list-item"
            key={category.id}
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>

      <div className="input-group mb-3">
        <FormControl
          placeholder="Category of product"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="btn btn-outline-secondary"
          style={{ color: 'white' }}
          id="button-addon2"
          onClick={filterProduct}
        >
          Button
        </button>
      </div>

      <div className="row justify-content-center mt-5" style={{ gap: '15px' }}>
        {products.map((productsItem) => (
          <div
            className="card"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/products/${productsItem.id}`)}
          >
            <h1>{productsItem.title}</h1>
            <img
              src={productsItem.productImgs}
              alt=""
              style={{ maxWidth: '300px' }}
            />
            <span>{productsItem.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
