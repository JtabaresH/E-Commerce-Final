import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  filterHeadline,
  filterCategory,
} from '../store/slices/products.slice';
import { FormControl } from 'react-bootstrap';

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
      .then((res) => setCategories(res.data?.data.categories));
  }, []);

  /* console.log(categories); */

  const filterProduct = () => {
    dispatch(filterHeadline(search));
  };

  const selectCategory = (id) => {
    dispatch(filterCategory(id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col order-first">
          <div className="list-group">
            <b className="text-decoration-underline">Categories</b>
            {categories.map((category) => (
              <div
                className="list-group-item"
                key={category.id}
                onClick={() => selectCategory(category.id)}
                style={{ cursor: 'pointer' }}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>

        <div className="col-10 mt-5">
          <div className="input-group mb-3">
            <FormControl
              placeholder="Category of product"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className="btn btn-outline-secondary"
              id="button-addon2"
              onClick={filterProduct}
            >
              Button
            </button>
          </div>

          <div
            className="row justify-content-center mt-5"
            style={{ gap: '15px' }}
          >
            {products.map((productsItem) => (
              <div
                className="card"
                style={{ cursor: 'pointer', maxWidth: '300px' }}
                key={productsItem.id}
              >
                <div onClick={() => navigate(`/products/${productsItem.id}`)}>
                  <h6 className="text-center">{productsItem.title}</h6>
                  <div className="d-flex justify-content-center">
                    <img
                      src={productsItem.productImgs}
                      alt=""
                      style={{ maxWidth: '150px', maxHeight: '150px' }}
                    />
                  </div>
                </div>
                <div className="input-group mb-3 mt-3">
                  <span className="form-control text-center">
                    <b>${productsItem.price}</b>
                  </span>
                  <button className="btn btn-success" type="button" id="">
                    Add Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
