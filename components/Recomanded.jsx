import Product from "./atom/RecommendedProduct";
import { withTranslation } from "../i18n";
import styles from "../styles/Recomanded.module.scss";
function Recomanded({ products, t }) {
  return (
    <div className="">
      {/* <h6 className="header_component header_title">
        {t("RECOMMENDED FOR YOU")}
      </h6> */}
      <div className="row no-gutters">
        {products.map((product, index) => (
          <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-12 px-2 px-md-0" key={index}>
            <Product product={product} style={styles} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withTranslation("product")(Recomanded);
