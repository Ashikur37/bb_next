import React, { useState, useEffect } from "react";
import HeaderComponent from "../atom/HeaderComponent";
import axios from "../../redux/actions/axios";

import "../../assets/sass/page.scss";
import Loader from "../atom/Loader";
import Footer from "../layout/Footer";
import { withRouter } from "react-router-dom";

function Page({ match }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`getdata/page/${match.path.substring(1)}`).then((res) => {
      setData(res.data);
    });
  }, [match.path]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  return (
    <>
      <div className="page">
        {data ? (
          <div className="container">
            <HeaderComponent text={data.name} />
            <p
              className="descriptions"
              dangerouslySetInnerHTML={createMarkup(data.body)}
            ></p>
          </div>
        ) : (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default withRouter(Page);
