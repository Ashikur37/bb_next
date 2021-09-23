import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "../../redux/actions/axios";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { HelmetProvider, Helmet } from "react-helmet-async";

import "../../assets/sass/profile.scss";
const Loader = lazy(() => import("../atom/Loader"));
const Footer = lazy(() => import("../layout/Footer"));

const OrderHistory = lazy(() => import("../OrderHistory"));
function OrdersPage({ auth, history, logout }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!auth.isAuthenticated || !localStorage.getItem("auth_token")) {
      history.push("/login");
    }
    if (auth.isAuthenticated) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("auth_token") || ""
        }`;
      axios.get("getdata/profile?query=order_only")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {

        });
    }
  }, [auth]);
  //logout
  const logoutClick = () => {
    // console.log("logout");
    logout();
    // logoutUser();
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Profile - Order history</title>
        </Helmet>
      </HelmetProvider>
      {user ? (
        <div className="container">
          {/* <HeaderComponent text="PROFILE" /> */}
          <div className="profileHeader">
            <h3>
              {"< "}
              <Link to="/profile">Profile</Link>
            </h3>
            {/* <button
              onClick={logoutClick}
              className="btn btn-sm btn-outline-danger"
            >
              Logout
            </button> */}
          </div>
          {/* <div className="profile">
            <div className="row">
              <div className="col-md-3">
                <div className="basic_wrap">
                  <div className="basic">
                    <img
                      className="profile_img"
                      src={require("../../assets/images/profile.png")}
                      alt=""
                    />
                    <span className="profile_name">{user.user.first_name}</span>
                    <span className="profile_profession">
                      {user.user.email}
                    </span>
                    <span className="profile_address">
                      {user.user.profile
                        ? `${user.user.profile.city}, ${user.user.profile.country}`
                        : "Not defined"}
                    </span>
                  </div>
                </div>
              </div>
              {user.user.profile ? (
                <div className="col-md-4">
                  <Additional user={user.user} />
                </div>
              ) : (
                ""
              )}
              <div className="col-md-5">
                <div className="change_pass">
                  <span className="title">Change Password</span>
                  <form>
                    <div className="form-group pass_group">
                      <label className="input_label">Old Password</label>
                      <input
                        type="password"
                        className="form-control input_box"
                      />
                    </div>
                    <div className="form-group pass_group">
                      <label className="input_label">New Password</label>
                      <input
                        type="password"
                        className="form-control input_box"
                      />
                    </div>
                    <div className="form-group pass_group">
                      <label className="input_label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control input_box"
                      />
                    </div>
                    <div className="form_btn_container">
                      <input
                        className="submit_btn change_btn"
                        type="submit"
                        value="Save Changes"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          {user.order.length > 0 ? (
            <div className="row">
              <Suspense fallback={<Loader />}>
                <OrderHistory orders={user.order} />
              </Suspense>
            </div>
          ) : (
              <h2 className="text-center"> No Orders Yet</h2>
            )}
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => logoutUser(dispatch),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrdersPage));
