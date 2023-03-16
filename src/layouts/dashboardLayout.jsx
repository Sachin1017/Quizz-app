import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { AuthContext } from '../context/authContext';
import { CartProvider } from '../context/cartContext';
import { CounterProvider } from '../context/counterContext';
import { ProductsProvider } from '../context/productContext';

function DashboardLayout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <ProductsProvider>
      <CartProvider>
        <CounterProvider>
          <Header />
          <Outlet />
        </CounterProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default DashboardLayout;
