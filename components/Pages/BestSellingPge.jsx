import React, { useState, useEffect } from "react";

import Product from "../atom/Product";
import axios from "../../redux/actions/axios";
import Loader from "../atom/Loader";
import Footer from "../layout/Footer";

function BestSellingPge() {
  const [bestSellingProducts, setBestSellingProducts] = useState();
  useEffect(() => {
    axios
      .get("/getdata/products/best-selling")
      .then((res) => {
        setBestSellingProducts(res.data);
      })
      .catch();
  }, []);
  return (
    <>
      {bestSellingProducts ? (
        <div className="container">
          <div className="best_selling_page">
            {bestSellingProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
      <Footer />
    </>
  );
}

export default BestSellingPge;
