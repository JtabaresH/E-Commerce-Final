import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ show, handleClose }) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const navigate = useNavigate();

  const selectProducts = (cartProduct) => {
    handleClose();
    navigate(`/products/${cartProduct.category.id}`);
  };

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {cartProducts.map((cartProduct) => (
              <ListGroup.Item key={cartProduct.id}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div
                      className="col-md-4 mt-2 d-flex justify-content-center"
                      onClick={() => selectProducts(cartProduct)}
                    >
                      <img
                        src={cartProduct.productImgs}
                        className="img-fluid rounded-start"
                        style={{ maxWidth: '80px', maxHeight: '80px' }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <b className="card-title">{cartProduct.title}</b>
                        <div className="d-flex justify-content-center">
                          <label
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          >
                            $ {cartProduct.price}
                          </label>
                          <button
                            className="btn btn-secondary"
                            type="button"
                            id="button-addon1"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger"
              onClick={() => alert('Carrito comprado')}
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
