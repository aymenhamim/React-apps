import Header from './components/Header';
import { useState } from 'react';
import GlobalStyles from './components/styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="" element={<HomePage />}>
            <Route path="landing" element={<Landing />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
