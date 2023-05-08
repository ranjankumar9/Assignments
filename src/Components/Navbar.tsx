import React, { useState } from "react";
import css from "../Styles/Navbar.module.css";
import axios, { AxiosResponse } from "axios";
import { productdata } from "./Utils";

const Navbar = ({onSearch}:any) => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState<productdata[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query)
    const res: AxiosResponse<productdata[]> = await axios.get(
      `https://random-skts.onrender.com/Product?q=${query}`
    );
    setSearchData(res.data);
  };

  return (
    <>
      <div className={css.navbar}>
        <div className={css.nav1}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Nav_logo.png"
            alt=""
          />
          <form className={css.search} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className={css.nav2}>
          <p>Categories</p>
          <i className="fa-solid fa-bell"></i>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOciWshHkTzFKgiKMJHUOW3OSQQ8Dv1A8ZWKkYZ2nKPgMmy7MOETlpjOp62raFIl-IOt0&usqp=CAU"
            alt=""
          />
        </div>
      </div>

    </>
  );
};

export default Navbar;
