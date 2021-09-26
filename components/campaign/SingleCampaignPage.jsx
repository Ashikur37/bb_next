import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../../redux/actions/axios";
import Product from "../../atom/Product";
// import HeaderComponent from "../../atom/HeaderComponent";
import Loader from "../../atom/Loader";
import Footer from "../../layout/Footer";

function SingleCampaignPage(props) {
  // const [value, setValue] = useState();
  const [campaign, setCampaign] = useState();
  const [products, setProducts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("/getdata/campaign/" + props.match.params.slug)
      .then((res) => {
        setCampaign(res.data.campaign);
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [props.match.params.slug]);

  // useEffect(() => {
  //   setValue(props.match.params.slug);
  // }, [value]);
  return (
    <div className="single__campaign__page">
      {error ? (
        <h1
          style={{ marginTop: "200px", marginBottom: "200px" }}
          className="text-center"
        >
          {error}
        </h1>
      ) : (
        <>
          {" "}
          {campaign ? (
            <div className="container">
              <div className="row">
                <div className="col">
                  <img src={campaign.banner} alt={campaign.slug} srcSet="" />
                </div>
              </div>
              <div className="container">
                <div className="best_selling_page">
                  {products &&
                    products.map((product) => (
                      <Product product={product} key={product.id} />
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="loader">
              <Loader />
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default withRouter(SingleCampaignPage);
