import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div class="container" style={{background:"none"}}>
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-12">
          <div class="search">
          <i class="bi bi-search"></i>
            <input
              type="text"
              class="form-control"
              placeholder="Have a question? Ask Now"
            />
            <button class="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
