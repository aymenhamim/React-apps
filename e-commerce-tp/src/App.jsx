import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import NotFound from './pages/NotFound.jsx';
import Products from './pages/Products.jsx';
import React from 'react';
import UserLayout from './layouts/UserLayout.jsx';
import Category from './pages/Category.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ShowProduct from './pages/ShowProduct.jsx';

import { Provider } from 'react-redux';
import store from './redux/store1.js';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Redirect root path to /products */}
          <Route path="/" element={<Navigate to="/products" replace />} />

          <Route path="/" element={<UserLayout />}>
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ShowProduct />} />
            <Route path="category" element={<Category />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
