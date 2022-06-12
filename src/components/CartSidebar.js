import React, { useEffect } from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart, buyCart, deleteCart } from '../store/slices/cart.slice';

const CartSidebar = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const selectProducts = (cartProduct) => {
    handleClose();
    navigate(`/products/${cartProduct.id}`);
  };

  const total = cart.reduce(
    (total, prod) => total + prod.productsInCart.quantity * prod.price,
    0
  );

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {cart.map((cartProduct) => (
              <ListGroup.Item key={cartProduct.id}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div
                      className="col-md-4 mt-2 d-flex justify-content-center"
                      onClick={() => selectProducts(cartProduct)}
                    >
                      <b className="card-title">{cartProduct.title}</b>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <div className="input-group justify-content-center mt-2">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon1"
                          >
                            -
                          </button>
                          <label
                            type="text"
                            className="form-control"
                            placeholder=""
                            style={{ maxWidth: '50px' }}
                          >
                            {cartProduct.productsInCart.quantity}
                          </label>
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="input-group mt-2 mb-2">
                        <label type="text" className="form-control">
                          Subtotal:
                        </label>
                        <label
                          type="text"
                          className="form-control text-center"
                          placeholder=""
                        >
                          $
                          {cartProduct.price *
                            cartProduct.productsInCart.quantity}
                        </label>
                        <button
                          className="btn btn-secondary"
                          type="button"
                          id="button-addon1"
                          onClick={() => dispatch(deleteCart(cartProduct.id))}
                        >
                          <i className="bi bi-trash">{/* Delete Product */}</i>
                        </button>
                      </div>
                      <div className="d-flex justify-content-center"></div>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="d-flex justify-content-center">
            <div className="input-group me-2">
              <label type="text" className="form-control">
                Total:
              </label>
              <label type="text" className="form-control text-center">
                ${total}
              </label>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(buyCart())}
            >
              Checkout
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSidebar;
