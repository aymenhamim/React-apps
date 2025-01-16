import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import React from 'react';
import UserLayout from './layouts/userLayout';
import Category from './pages/Category';
import ContactUs from './pages/ContactUs';

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index path="home" element={<Home />} />
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
