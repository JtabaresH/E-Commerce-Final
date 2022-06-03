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
      .then((res) => setCategories(res.data.categories));
  }, []);

  const filterProduct = () => {
    dispatch(filterTypeProduct(search));
  };

  const selectCategory = (id) => {
    alert(id);
  };

  return (
    <div>
      <h1>Home</h1>

      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.id}
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Category of product"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={filterProduct}
        >
          Button
        </Button>
      </InputGroup>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((productsItem) => (
          <Col>
            <Card
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
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
