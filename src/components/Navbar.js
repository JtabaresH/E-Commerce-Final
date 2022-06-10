import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const Navbar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    const token = localStorage.getItem('token');

    if (token) {
      setShow(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="col border">
              <a className="nav-link" href="/#/">
                <i className="bi bi-cpu">
                  <b> TechShop</b>
                </i>
              </a>
            </div>
            <div className="col border">
              <div className="d-flex gap-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/#/login"
                >
                  <i className="bi bi-person-badge">{/* Login */}</i>
                </a>
                <a className="nav-link" href="/#/purchases">
                  <i className="bi bi-bag">{/* Purchases */}</i>
                </a>
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  style={{ cursor: 'pointer' }}
                  onClick={handleShow}
                >
                  <i className="bi bi-cart">{/* Shopping Cart */}</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CartSidebar show={show} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
