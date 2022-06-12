import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchases } from '../store/slices/purchases.slice';

const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchasesUser = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    <div className="box-purchases">
      {purchasesUser.map((purchaseUser) => (
        <>
          <div className="date-purchase">{purchaseUser.createdAt}</div>

          <div className="box-self-purchases">
            {purchaseUser.cart.products.map((product) => (
              <div className="info-purchases">
                <div
                  className="purchase-title"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  {' '}
                  {product.title}
                </div>

                <div className="quantity-purchases">
                  {product.productsInCart.quantity}
                </div>
                <div className="price-purchase">${product.price}</div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Purchases;
