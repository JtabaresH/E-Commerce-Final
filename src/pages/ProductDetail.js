import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../store/slices/products.slice';
import { addToCart } from '../store/slices/cart.slice';

const ProductDetail = () => {
  const [products, setProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsSimilar = useSelector((state) => state.products);

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

  const addProduct = () => {
    const product = {
      id: id,
      quantity: quantity,
    };
    dispatch(addToCart(product));
    setQuantity(1);
  };

  const addProductSimilar = (productsSimilar) => {
    const product = {
      id: productsSimilar.id,
      quantity: quantity,
    };
    setQuantity(1);
    dispatch(addToCart(product));
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col order-first mt-3 ms-3">
          <div className="d-flex justify-content-center">
            <img
              src={products.productImgs}
              alt=""
              style={{ maxWidth: '400px', maxHeight: '400px' }}
            />
          </div>
        </div>
        <div className="col">
          <div className="mt-3 me-3">
            <h3 className="text-center">{products.title}</h3>
            <p className="ms-2">{products.description}</p>
            <div className="d-flex flex-column justify-content-center">
              <div className="input-group mb-3">
                <span className="form-control" id="price">
                  <b>${products.price}</b>
                </span>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder={quantity}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  style={{ maxWidth: '50px' }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-success"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                onClick={addProduct}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}
      <div className="row justify-content-center mt-5" style={{ gap: '15px' }}>
        <h6 className="text-danger ms-5">Discover similar items</h6>
        {productsSimilar.map((productSimilar) => (
          <div
            className="card"
            style={{ cursor: 'pointer', maxWidth: '250px' }}
            key={productSimilar.id}
          >
            <div onClick={() => navigate(`/products/${productSimilar.id}`)}>
              <b className="text-center">{productSimilar.title}</b>
              <div className="d-flex justify-content-center">
                <img
                  src={productSimilar.productImgs}
                  alt=""
                  style={{ maxWidth: '150px', maxHeight: '150px' }}
                />
              </div>
            </div>
            <div className="input-group mb-3 mt-3">
              <span className="form-control text-center">
                <b>${productSimilar.price}</b>
              </span>
              <button
                className="btn btn-success"
                value={quantity}
                onClick={() => addProductSimilar(productSimilar)}
                onChange={() => setQuantity(1)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
