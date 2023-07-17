import React from "react";
import Navbar from "../navbar/Navbar";
import ProductList from "../product-list/component/ProductList";

const Home = () => {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
};

export default Home;
