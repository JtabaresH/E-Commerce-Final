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
              <ListGroup.Item
                key={product.id}
                onClick={() => selectProducts(product)}
              >
                {/* {favorite.news.headline}
                <img src={favorite.news.image} className="img-fluid" alt="" /> */}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger" onClick>Checkout</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSidebar;
