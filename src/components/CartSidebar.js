import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ show, handleClose }) => {
  const products = useSelector((state) => state.products);

  const navigate = useNavigate();

  const selectProducts = (product) => {
    handleClose();
    navigate(`/products/${product.category.id}`);
  };

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {products.map((product) => (
              <ListGroup.Item key={product.id}>
                <div className="card mb-3" style={{ maxWidth: '' }}>
                  <div className="row g-0">
                    <div
                      className="col-md-4 mt-2 d-flex justify-content-center"
                      onClick={() => selectProducts(product)}
                    >
                      <img
                        src={product.productImgs}
                        className="img-fluid rounded-start"
                        style={{ maxWidth: '80px', maxHeight: '80px' }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <b className="card-title">{product.title}</b>
                        <div className="d-flex justify-content-center">
                          <label
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          >
                            $ {product.price}
                          </label>
                          <button
                            className="btn btn-secondary"
                            type="button"
                            id="button-addon1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>
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
