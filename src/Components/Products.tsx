import React, { useEffect, useState } from "react";
import css from "../Styles/Products.module.css";
import axios, { AxiosResponse } from "axios";
import { productdata } from "./Utils";
import { useLocation, useSearchParams } from "react-router-dom";


const Products = ({onSearch}:any) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
    const [searchData,setSearchData] = useState<productdata[]>([])
  const [result, setResult] = useState<productdata[]>([]);
  const [sortOption, setSortOption] = useState("");

  const fetchData = async (params?: object) => {
    const res: AxiosResponse<productdata[]> = await axios.get(
      `https://random-skts.onrender.com/Product`,
      params
    );
    return res.data;
  };

  useEffect(() => {
    const price = searchParams.get("price");
    let paramObj = {
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category"),
      _sort: price && "price",
    };
    fetchData({ params: paramObj }).then((res) => {
      setResult(res);
    });
  }, [location.search]);

  let sortedProducts = result;

  if (sortOption === "low-to-high") {
    sortedProducts = result.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    sortedProducts = result.sort((a, b) => b.price - a.price);
  }



  return (
    <>
      <div>
        <div className={css.sort}>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="low-to-high">Price low to high</option>
            <option value="high-to-low">Price high to low</option>
          </select>
        </div>
        <div className={css.product}>
          {sortedProducts.map((item) => {
            return (
              <div key={item.id} className={css.data}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.title}</p>
                  {/* <p>{item.category}</p> */}
                  <p>{item.brand}</p>
                  <span>&#9733;{item.rating}</span>
                  <h5>${item.price}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
