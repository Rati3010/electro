import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import ProductDetailPage from "./ProductDetailPage";
import ProtectedRoute from "../auth/components/Protected";
import ProtectedAdmin from "../auth/components/ProtectedAdmin";
import OrderSuccessPage from "./OrderSuccessPage";
import PageNotFound from "./PageNotFound";
import UserOrderPage from "./UserOrderPage";
import UserProfilePage from "./UserProfilePage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import Logout from "../auth/components/Logout";
import AdminHome from "./AdminHome";
import AdminProductDetailPage from "./AdminProductDetailPage";
import AdminProductFormPage from "./AdminProductFormPage"; 

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product-detail/:id" element={<ProductDetailPage />} />
      <Route path="/order-success/:id" element={<OrderSuccessPage />} />
      <Route path="/orders" element={<UserOrderPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/product-detail/:id" element={<AdminProductDetailPage />} />
      <Route path="/admin/product-form" element={<AdminProductFormPage />} />
      <Route path="/admin/product-form/edit/:id" element={<AdminProductFormPage />} />
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRouter;
