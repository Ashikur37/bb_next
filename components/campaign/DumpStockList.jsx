import React, { useEffect, useState } from "react";
import Product from "../atom/Product";
import Header from "../layout/partials/Header";
function DumpStockList({ axios, lang, t }) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    let locale = lang === "en" ? "en" : "ar_QA" || "en";
    let url = `/${locale}/getdata/category/dump-stock`;
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="free__gift__list">
      {products && (
        <>
          <div className="row">
            <div className="col text-center my-2">
              <Header text={t("Dump Stock")} />
            </div>
          </div>
          <div className="row no-gutters">
            {products.map((product) => (
              <div className=" mb-3 col-6 col-xs-6 col-xs-6 col-md-4  " key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default DumpStockList;
