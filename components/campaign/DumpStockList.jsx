import React, { useEffect, useState } from "react";
import HeaderComponent from "../atom/HeaderComponent";
import Product from "../atom/Product";
function DumpStockList({ axios, lang,t }) {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        let locale = lang === "en" ? "en" : "ar_QA" || "en";
        let url = `/${locale}/getdata/category/dump-stock`;
        axios.get(url).then(res => {
            setProducts(res.data);
        })
    }, []);
    return (
        <div className="free__gift__list">
            {products &&
                (
                    <>
                        <div className="row">
                            <div className="col">
                                <HeaderComponent text={t("Dump Stock")} />
                            </div>
                        </div>
                        <div className="row">
                            {
                                products.map((product) => (
                                    <div className="col-md-4" key={product.id} >
                                        <Product product={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </>)
            }
        </div>
    );
}

export default DumpStockList;
