import React from 'react';
import { Home, Login, ProductDetail, Purchases } from './pages';
import { LoadingScreen, Navbar } from './components';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      <HashRouter>
        <Container>
          <Navbar/>
          {isLoading && <LoadingScreen />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/purchases" element={<Purchases />} />
          </Routes>
        </Container>
      </HashRouter>
    </>
  );
}
