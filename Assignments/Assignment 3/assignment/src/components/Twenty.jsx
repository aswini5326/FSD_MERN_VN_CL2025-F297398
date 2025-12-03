import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Products from "./Products";

const Twenty = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BrowserRouter>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Product</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Nested Routes */}
            <Route path="/products" element={<Products />}>
              <Route path="electronics" element={<Electronics />} />
              <Route path="fashion" element={<Fashion />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Twenty;
