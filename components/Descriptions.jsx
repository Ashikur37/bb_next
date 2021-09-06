import React, { useState, useEffect } from "react";
import Link from "next/link";
import MoreThisBrand from "./MoreThisBrand";
import Reviews from "./atom/Reviews";
import HeaderComponent from "./atom/HeaderComponent";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import axios from "../redux/actions/axios";
import styles from "../styles/Description.module.scss";
function Descriptions({
  product_id,
  attribute,
  desc,
  similar_brands,
  reviews,
  avgRating,
  auth,
  loginUser,
  t,
  lang,
}) {
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState();
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newReview, setNewReview] = useState({
    product_id,
    reviewer_name: auth.isAuthenticated
      ? JSON.parse(auth.user).first_name === JSON.parse(auth.user).last_name
        ? JSON.parse(auth.user).first_name
        : JSON.parse(auth.user).first_name +
          " " +
          JSON.parse(auth.user).last_name
      : "",
    rating: null,
    comment: null,
  });
  // const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    let form = new FormData();
    form.append("email", email);
    form.append("password", password);

    loginUser(form);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setError(null);
  //   }, 3000);
  // }, [error]);
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  const BrandDesc = () => {
    if (attribute.length > 0) {
      let brand = attribute.filter((attr) => attr.attribute_id === 4);
      if (brand.length > 0) {
        brand = brand[0];
        const desc =
          brand.values[0].attribute_value.translations[0].description;
        const image = brand.values[0].attribute_value.image
          ? brand.values[0].attribute_value.image.image
          : null;
        const brandName = brand.values[0].attribute_value.value;
        return (
          <div className={styles.brand_description__wrapper}>
            {image ? (
              <img src={image} alt="brand-image" className={styles.brand_image} />
            ) : null}
            <div
              className={styles.main_description}
              dangerouslySetInnerHTML={createMarkup(desc)}
            ></div>
            <Link href={`/brand/${brandName.split(" ").join("-")}`}>
              <a className={styles.brand_link}>see all</a>
            </Link>
          </div>
        );
      }
    }
    return null;
  };
  //change rating
  const changeRating = (newRating, name) => {
    setRating(newRating);
    setNewReview({
      ...newReview,
      rating: newRating,
    });
  };
  const submitReviewHandler = (e) => {
    e.preventDefault();
    if (!newReview.rating) {
      window.alert("Please provide a rating");
    } else if (!newReview.comment) {
      window.alert("Please provide a comment");
    } else {
      if (localStorage.getItem("auth_token")) {
        let token = localStorage.getItem("auth_token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      axios
        .post(`setdata/${newReview.product_id}/reviews`, { ...newReview })
        .then((res) => {
          setNewReview({
            ...newReview,
            comment: null,
            rating: null,
          });
          setRating(0);
          window.alert(res.data);
        });
    }
  };
  return (
    <div className={styles.descriptions_container}>
      <div className={styles.descrption_title_container}>
        <ul className={styles.tab_menu}>
          <li
            onClick={() => setActive(1)}
            className={active === 1 ? `${styles.active}` : null}
          >
            {t("Description")}
          </li>
          <li
            onClick={() => setActive(2)}
            className={active === 2 ? `${styles.active}` : null}
          >
            {t("More About this Brand")}
          </li>
          <li
            onClick={() => setActive(3)}
            className={active === 3 ? `${styles.active}` : null}
          >
            {t("Review")}
          </li>
        </ul>
      </div>
      {active === 1 ? (
        <p
          className={
            lang == "en"
              ? `${styles.descriptions}`
              : `${styles.descriptions} ${styles.rtl}`
          }
          dangerouslySetInnerHTML={createMarkup(desc)}
        ></p>
      ) : null}
      {active === 2 ? (
        similar_brands.length > 0 ? (
          <>
            <BrandDesc />
            <MoreThisBrand products={similar_brands} />
          </>
        ) : (
          <h6 className="text-center">{t("Not Available")}</h6>
        )
      ) : null}
      {active === 3 ? (
        <div className={styles.descritions}>
          <div className={styles.review_rating_container}>
            <HeaderComponent text={t("Review and Ratings")} />
            <div className="row">
              <div className="col-md-6">
                {auth.isAuthenticated ? (
                  <>
                    <h4 className="text-center">Write A Review</h4>
                    <div className={styles.write_review}>
                      <span className={styles.your_rating}>Your Rating :</span>
                      <StarRatings
                        rating={rating}
                        starRatedColor="#ec198e"
                        changeRating={changeRating}
                        numberOfStars={5}
                        name="rating"
                      />
                      <textarea
                        placeholder="Your opinion about this product...."
                        rows="5"
                        value={newReview.comment || ""}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            comment: e.currentTarget.value,
                          })
                        }
                      ></textarea>
                      <button
                        className={styles.submit_btn}
                        onClick={submitReviewHandler}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <form method="POST" onSubmit={(e) => loginHandler(e)}>
                      <h6 className="text-center bg-warning p-2">
                        {t("YOU NEED TO LOGIN BEFORE REVIEW")}
                      </h6>
                      <div className="form-group">
                        <label className={styles.input_label}>
                          {t("Email address")}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder={t("Enter email")}
                          value={email}
                          onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className={styles.input_label}>
                          {t("Password")}
                        </label>
                        <input
                          type="password"
                          className="form-control "
                          placeholder={t("Enter Password")}
                          value={password}
                          onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <div className={styles.input_label}>
                          <Link href="/forget-password">
                            {t("Forget Password")}
                          </Link>
                          <Link href="/register">{t("Register")}</Link>
                        </div>
                      </div>
                      <div className={styles.form_btn_container}>
                        <input
                          className={
                            email === "" || password === ""
                              ? `${styles.disabled} ${styles.submit_btn}`
                              : `${styles.submit_btn}`
                          }
                          type="submit"
                          value={t("login")}
                        />
                      </div>
                    </form>
                  </>
                )}
              </div>
              <div className="col-md-6">
                <h4 className="text-center mb-3">
                  {t("ratings")} - {reviews.length}
                </h4>
                <div className={styles.progress_container}>
                  <div className={styles.single_progress}>
                    <span className={styles.left}>5</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            100 /
                              (reviews.length /
                                reviews.filter((rb) => rb.rating == 5).length) +
                            "%",
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className={styles.right}>
                      {reviews.filter((rb) => rb.rating == 5).length}
                    </span>
                  </div>
                  <div className={styles.single_progress}>
                    <span className={styles.left}>4</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            100 /
                              (reviews.length /
                                reviews.filter((rb) => rb.rating == 4).length) +
                            "%",
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className={styles.right}>
                      {reviews.filter((rb) => rb.rating == 4).length}
                    </span>
                  </div>
                  <div className={styles.single_progress}>
                    <span className={styles.left}>3</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            100 /
                              (reviews.length /
                                reviews.filter((rb) => rb.rating == 3).length) +
                            "%",
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className={styles.right}>
                      {reviews.filter((rb) => rb.rating == 3).length}
                    </span>
                  </div>
                  <div className={styles.single_progress}>
                    <span className={styles.left}>2</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            100 /
                              (reviews.length /
                                reviews.filter((rb) => rb.rating == 2).length) +
                            "%",
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className={styles.right}>
                      {reviews.filter((rb) => rb.rating == 2).length}
                    </span>
                  </div>
                  <div className={styles.single_progress}>
                    <span className={styles.left}>1</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            100 /
                              (reviews.length /
                                reviews.filter((rb) => rb.rating == 1).length) +
                            "%",
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className={styles.right}>
                      {reviews.filter((rb) => rb.rating == 1).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Reviews reviews={reviews} avgRating={avgRating} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo) => loginUser(dispatch, userInfo),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Descriptions);
