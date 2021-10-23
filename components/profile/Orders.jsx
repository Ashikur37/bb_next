import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

// import axios from "../../redux/actions/axios";
import Axios from "axios";
import { connect } from "react-redux";

import OrderHistory from "../../components/OrderHistory";
import { withTranslation } from "../../i18n";
import Head from "next/head";
import styles from "../../styles/UserProfilePage.module.scss";

function OrdersPage({ auth, t, lang, language, data, Auth }) {
  const router = useRouter();
  const [orders, setOrders] = useState(null);
  const [rewards, setRewards] = useState(null);
  const [points, setPoints] = useState(0);
  const [newPoints, setNewPoints] = useState(0);
  useEffect(() => {
    if (!Auth) {
      router.push("/login");
    }
    if (data) {
      setOrders(data?.orders);
      setRewards(data?.rewards);
      setPoints(totalPurchasePoints(data?.rewards, data?.redeems));
    }
  }, [Auth, language]);
  const refreshNow = () => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${
      localStorage.getItem("auth_token") || ""
    }`;
    Axios.get(
      `/api/profile?locale=${language}&query=order_only&refresh=now`
    ).then((res) => {
      setOrders(res.data?.orders);
      setRewards(res.data?.rewards);
      setPoints(totalPurchasePoints(res.data?.rewards, res.data?.redeems));
      window.location.reload();
    });
  };
  const totalPurchasePoints = (data, redeems = null) => {
    if (data) {
      let total = redeems ? -redeems.point_redeemed : 0;
      data.map((r) => {
        total += r.reward_value.reduce(
          (acc, item) => (acc += item.reward_point),
          0
        );
      });
      setNewPoints(total);
      return total;
    }
    return 0;
  };
  const pointsToWallet = (e) => {
    e.preventDefault();

    const locale = lang == "ar_QA" ? "ar_QA" : "en";

    Axios.defaults.headers.common["Authorization"] = `Bearer ${
      localStorage.getItem("auth_token") || ""
    }`;
    Axios.post(`/api/profiles/point-to-wallet`, {
      locale,
      point_amount: newPoints,
    })
      .then((res) => {
        if (res) {
          if (auth.isAuthenticated) {
            Axios.get(
              `/api/profile?locale=${locale}&query=order_only&refresh=now`
            )
              .then((res) => {
                setPoints(
                  totalPurchasePoints(res.data.rewards, res.data.redeems)
                );
              })
              .catch((err) => {});
          }
        }
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };
  return (
    <>
      <Head>
        <title>History | Beautyboothqa</title>
      </Head>
      {orders && rewards ? (
        <div className="container">
          <marquee behavior="alternate">
            Rewards calculates once every 24hours, so estimated reward points
            can vary
          </marquee>
          {/* <div className="profileHeader">
            <h3>
              {"< "}
              <Link href="/profile">{t('Profile')}</Link>
            </h3>
          </div> */}

          {rewards.length > 0 ? (
            <div className={`${styles.order_history} row`}>
              <div className={styles.history_title_container}>
                <span className={styles.history_title}>
                  {t("REWARDS HISTORY")}
                </span>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th
                      width="100px"
                      rowSpan="2"
                      style={{ verticalAlign: "middle" }}
                    >
                      {t("Type")}
                    </th>
                    <th colSpan="4">{t("Info")}</th>
                  </tr>
                  <tr>
                    <th>{t("Order No")}.</th>
                    <th>{t("Subtotal")}</th>
                    <th>{t("point")}</th>
                    <th>{t("date")}</th>
                  </tr>
                </thead>
                <tbody>
                  {rewards.map((reward, index) => (
                    <>
                      <tr>
                        <th
                          rowSpan={
                            reward.reward_value.length == 0
                              ? 2
                              : reward.reward_value.length + 1
                          }
                          style={{ verticalAlign: "middle" }}
                        >
                          {reward.slug}
                        </th>
                      </tr>

                      {reward.reward_value.length > 0 ? (
                        reward.reward_value.map((value) => (
                          <tr key={value.id}>
                            <td>{value.order_id}</td>
                            <td>{value.orders.sub_total.formatted}</td>
                            <td>{value.reward_point}</td>
                            <td>{value.created_at.split(" ")[0]}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4"> No records found</td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
              <h5 className={styles.history_title}>{t("Convert Points")}: </h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <form method="POST" onSubmit={pointsToWallet}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="number"
                      className="form-control form-control"
                      value={newPoints}
                      min="0"
                      max={points}
                      onChange={(e) => setNewPoints(e.currentTarget.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="submit"
                      className="btn btn-sm btn-success"
                      value={t("submit")}
                    />
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <h2 className="text-center"> No Orders Yet</h2>
          )}
          <button className="btn btn-sm btn-secondary" onClick={refreshNow}>
            {t("refresh now")}
          </button>
          {orders.length > 0 ? (
            <div className="row">
              <Suspense fallback={null}>
                <OrderHistory orders={orders} t={t} lang={lang} styles={styles} />
              </Suspense>
            </div>
          ) : (
            <h2 className="text-center"> {t("No Orders Yet")}</h2>
          )}
        </div>
      ) : (
        <div className="loader">{/* <Loader /> */}</div>
      )}
      {/* <Footer /> */}
    </>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withTranslation("common")(OrdersPage));
