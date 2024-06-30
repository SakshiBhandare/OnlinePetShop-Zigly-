import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as Router } from 'react-router-dom';
import store from './app/store'
import { Provider } from 'react-redux'
import HomePage from './Components/HomePage';
import AddSlider from './Components/AddSlider';
import Top from './Components/Top';
import ProductCard from './Components/ProductCard';
import Categories from './Components/Categories';
import TopMenu from './Components/TopMenu';
import ViewProduct from './Components/ViewProduct';
import Menubar from './Components/Menubar';
import Demo from './Components/Demo';
import Review from './Components/Review';
import Footer from './Components/Footer';
import ProductSlider from './Components/ProductSlider';
import ProductSliderTop from './Components/ProductSliderTop';
import SliderPage from './Components/SliderPage';
import Filter from './Components/Filter';
import MarqueeTop from './Components/MarqueeTop';
import Login from './Components/Login';
import Registration from './Components/Registration';
import LoginModal from './Components/LoginModal';
import Otp from './Components/Otp';
import ProductPage from './Components/ProductPage';
import ForgetPass from './Components/ForgetPass';
import About from './Components/About';
import BestSeller from './Components/BestSeller';
import Cart from './Components/Cart';
import ProductImageSlider from './Components/Product/ProductImageSlider';
import Loader from './Components/Loader';
import Offer from './Components/Offer';
import Grooming from './Components/Grooming';
import ViewallProduct from './Components/Product/ViewallProduct';
import Megamenu from './Components/Navbar/Megamenu';
import Wishlist from './Components/Wishlist';
import Checkout from './Components/Checkout';
import PaymentMode from './Components/PaymentMode';
import Total from './Components/Total';
import Payment from './Components/Payment';
import Address from './Components/Address';
import Signin from './Components/Signin';
import SigninModal from './Components/SigninModal';
import AboutPage from './Components/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/addslider" element={<AddSlider />} />
          <Route path="/top" element={<Top />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/topmenu" element={<TopMenu />} />
          <Route path="/viewproduct/:pid?" element={<ViewProduct />} />
          <Route path="/menubar" element={<Menubar />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/review" element={<Review />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/productslider" element={<ProductSlider />} />
          <Route path="/productslidertop" element={<ProductSliderTop />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/marqueetop" element={<MarqueeTop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/loginmodal" element={<LoginModal />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/productpage/:catgid?/:catgname?" element={<ProductPage />} />
          <Route path="/subproductpage/:catgid?/:id?/:catgname?" element={<ProductPage />} />
          <Route path="/products/:catgid?" element={<ProductPage />} />
          <Route path="/brandproducts/:catgid?/:catgname?" element={<ProductPage />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/about" element={<About />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productimageslider" element={<ProductImageSlider />} />
          <Route path="/loader" element={<Loader/>} />
          <Route path="/offer" element={<Offer/>} />
          <Route path="/grooming" element={<Grooming/>} />
          <Route path="/viewallproduct" element={<ViewallProduct/>} />
          <Route path="/sliderpage" element={<SliderPage/>} />
          <Route path="/megamenu" element={<Megamenu/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/paymentmode" element={<PaymentMode/>} />
          <Route path="/total" element={<Total/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/address" element={<Address/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signinmodal" element={<SigninModal/>} />
          <Route path="/aboutpage" element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
