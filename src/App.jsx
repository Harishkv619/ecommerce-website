import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductsPage from './components/ProductsPage';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {isLoggedIn && <button onClick={onLogout}>Logout</button>}
    </div>
  );
};

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    
    if (!isLoggedIn) {
      
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/home' element={<HomePage/>} />
        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />
    
        <Route
          path="/products"
          element={
            isLoggedIn ? (
              <ProductsPage />
            ) : (
              <Navigate to="/login" /> 
            )
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return <Layout />;
};

export default App;