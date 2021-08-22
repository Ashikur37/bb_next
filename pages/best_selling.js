import React from "react";
import axios from "../redux/actions/axios";
import Product from "../components/atom/Product";
import Head from "next/head";
import { withTranslation } from "../i18n";
import styles from "../styles/BestSelling.module.scss";
const BestSelling = ({ bestSellingProducts }) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Best selling | Beautyboothqa</title>
        </Head>
        <div className={styles.best_selling_page}>
          {bestSellingProducts.map((product) => (
            <Product product={product} key={product.id} styles={styles}/>
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
    }
  };
}

export default withTranslation("common")(BestSelling);
