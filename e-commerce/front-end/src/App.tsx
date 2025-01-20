import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import React from 'react';
import UserLayout from './layouts/UserLayout';
import Category from './pages/Category';
import ContactUs from './pages/ContactUs';
import ShowProduct from './pages/ShowProduct';

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/products" replace />}> */}
        <Route path="/" element={<UserLayout />}>
          <Route index path="products" element={<Products />} />
          <Route path="products/:id" element={<ShowProduct />} />
          <Route path="category" element={<Category />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
