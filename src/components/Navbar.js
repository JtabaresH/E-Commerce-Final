import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('token', '');
    alert('Successfully closed session');
    navigate('/');
  };

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
          <a className="navbar-brand" href="/#/">
            Tech-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/#/login"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#/purchases">
                  Purchases
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  style={{ cursor: 'pointer' }}
                  onClick={handleShow}
                >
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" onClick={logout}>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CartSidebar show={show} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
