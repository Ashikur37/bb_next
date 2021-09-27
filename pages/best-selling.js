import React from "react";
import axios from "../redux/actions/axios";
import Product from "../components/atom/Product";
import Head from "next/head";
import { withTranslation } from "../i18n";
import styles from "../styles/BestSelling.module.scss";
const BestSelling = ({ bestSellingProducts }) => {
  return (
    <>
      <div className="container mt-4">
        <Head>
          <title>Best selling | Beautyboothqa</title>
        </Head>
        <div className="row no-gutters">
          {bestSellingProducts.map((product) => (
            <div className="col-md-3 col-sm-6 col-6" key={product.id}>
              <Product product={product} key={product.id} styles={styles} />
            </div>
          ))}
        </div>
      </div>
      )
    </>
  );
};
export async function getServerSideProps(context) {
  let language = context.req.language || "en";
  let bestSellingProducts = await axios
    .get(`${language}/getdata/products/best-selling`)
    .then((res) => {
      return res.data;
    });
  return {
    props: {
      bestSellingProducts,
    },
  };
}

export default withTranslation("common")(BestSelling);
