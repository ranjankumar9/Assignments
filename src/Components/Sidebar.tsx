import React, { useEffect, useState } from "react";
import css from "../Styles/Sidebar.module.css";
import axios, { AxiosResponse } from "axios";
import { productdata } from "./Utils";
import { useSearchParams } from "react-router-dom";

type Params = {
  brand: string[];
  category: string[];
};

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialbrand = searchParams.getAll("brand");
  const initialCategory = searchParams.getAll("category");
  const [brand, setBrand] = useState<string[]>(initialbrand || []);
  const [category, setCategory] = useState<string[]>(initialCategory || []);
  // console.log(category)

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = [...brand];
    if (newBrand.includes(e.target.value)) {
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
    } else {
      newBrand.push(e.target.value);
    }
    setBrand(newBrand);
  };

  const handleFiltercategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };


  useEffect(() => {
    const params: Params = { brand, category };
    setSearchParams(params);
  }, [brand, category]);

  return (
    <div className={css.filters}>
      <div className={css.filter0}>
        <h3>FILTER</h3>
        <i className="fa-solid fa-filter"></i>
      </div>
      <div className={css.filter1}>
        <p>Brand</p>
        <div>
          <input
            type="checkbox"
            value="nike"
            onChange={handleFilter}
            checked={brand.includes("nike")}
          />
          <p>Nike</p>
        </div>
        <div>
          <input
            type="checkbox"
            value="puma"
            onChange={handleFilter}
            checked={brand.includes("puma")}
          />
          <p>Puma</p>
        </div>
        <div>
          <input
            type="checkbox"
            value="reebok"
            onChange={handleFilter}
            checked={brand.includes("reebok")}
          />
          <p>Reebok</p>
        </div>
        <div>
          <input
            type="checkbox"
            value="adidas"
            onChange={handleFilter}
            checked={brand.includes("adidas")}
          />
          <p>Adidas</p>
        </div>
        <div>
          <input
            type="checkbox"
            value="fila"
            onChange={handleFilter}
            checked={brand.includes("fila")}
          />
          <p>Fila</p>
        </div>
      </div>
      <div className={css.filter1}>
        <p>Category</p>
        <div>
          <input
            type="checkbox"
            value="men's clothing"
            onChange={handleFiltercategory}
            checked={category.includes("men's clothing")}
          />
          <p>men's clothing</p>
        </div>
        <div>
          <input
            type="checkbox"
            value="jewelery"
            onChange={handleFiltercategory}
            checked={category.includes("jewelery")}
          />
          <p>jewelery</p>
        </div>
        <div>
          <input
            type="checkbox"
            value="electronics"
            onChange={handleFiltercategory}
            checked={category.includes("electronics")}
          />
          <p>electronics</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
