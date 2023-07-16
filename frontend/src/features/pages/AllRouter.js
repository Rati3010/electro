import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import ProductDetailPage from "./ProductDetailPage";
import ProtectedRoute from "../auth/components/Protected";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/product-detail/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AllRouter;
