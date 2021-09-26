import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../../redux/actions/axios";
import Product from "../../atom/Product";
import Loader from "../../atom/Loader";
import Footer from "../../layout/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
// import queryString from "query-string";
function OffersPage(props) {
  // let params = queryString.parse(props.location.search);
  // let { category, type } = params;
  const [products, setProducts] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [empty, setEmpty] = useState(false);
  const [items, setItems] = useState();
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    axios
      .get(`/getdata/offer${props.location.search}`)
      .then((res) => {
        let filteredProducts = res.data.products?.filter((product) => {
          if (product.hasCampaign == true || product.has_offer == true) {
            return product;
          }
        });
        if (filteredProducts.length === 0) {
          setEmpty(true);
        }
        setProducts(filteredProducts);
        setBrand(res.data.brand || null);
        setCategory(res.data.category || null);
        setItems(filteredProducts);
      })
      .catch();
  }, [props.location.search]);

  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  const fetchMoreData = () => {
    if (items.length >= 200) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      let newItems = items.concat(items);
      setItems(newItems);
    }, 500);
  };
  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };
  return (
    <>
      <div className="container">
        {brand && (
          <div className="row my-3">
            <div className="col-md-5">
              <img
                src={brand.image.featured_image}
                alt="Banner__image"
                srcSet=""
              />
            </div>
            <div
              className="col-md-7"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="brand_details_container">
                <p
                  dangerouslySetInnerHTML={createMarkup(brand.description)}
                ></p>
              </div>
            </div>
          </div>
        )}
        {category && (
          <div className="row my-3">
            <div
              className="col-md-7"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h2>{category.name}</h2>
            </div>
          </div>
        )}
        {products ? (
          <>
            <div className="best_selling_page">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )}
        {empty && (
          <h5 className="alert alert-info">
            No products for now. Please come back again
          </h5>
        )}
        {items && (
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h2 style={{ textAlign: "center" }}>Loading...</h2>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <>
              <div className="best_selling_page">
                {items.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            </>
          </InfiniteScroll>
        )}
      </div>
      <Footer />
    </>
  );
}

export default withRouter(OffersPage);
