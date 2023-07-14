import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import ProductDetailPage from "./ProductDetailPage";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product-detail" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AllRouter;
