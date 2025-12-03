import React from "react";
import  {Link, Outlet } from "react-router-dom";


const Products = () => {
  return (
    <div>
     <h1>Product Page</h1>

      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="electronics">Electronics</Link>
        <Link to="fashion">Fashion</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Products;
