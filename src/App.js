import './assets/css/open-iconic-bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/aos.css';
import './assets/css/ionicons.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/jquery.timepicker.css';
import './assets/css/flaticon.css';
import './assets/css/icomoon.css';
import './assets/css/style.css'
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate ,Switch,Redirect} from 'react-router-dom';
import Login from './admin/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './components/product/ProductDetail';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';

function App() {

  // const user = useSelector((state) => state.auth.user);
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:id" element={<Checkout />} />          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;