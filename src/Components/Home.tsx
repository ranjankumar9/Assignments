import React, { useState } from "react";
import Navbar from "./Navbar";
import css from "../Styles/Home.module.css";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Home = () => {

  
  return (
    <div>
      <Navbar />
      <div className={css.main}>
        <div className={css.filter}>
          <Sidebar />
        </div>
        <div className={css.productdata}>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
