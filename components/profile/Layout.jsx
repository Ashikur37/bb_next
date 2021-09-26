import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions"
import styles from "../../styles/UserProfilePage.module.scss"

const SideBar = dynamic(()=>import("./SideBar"));
function Layout({ children, active, auth,logout }) {
  useEffect(()=>{
    if(!auth.isAuthenticated){
      logout();
      window.location.href= '/login'
    }
  },[auth]);
  return (
    <div className={`${styles.user_profile} my-3`}>
      <Head>
        <title>User Profile</title>
      </Head>
      {auth.isAuthenticated && (
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideBar styles={styles} active={active} />
            </div>
            <div className="col-lg-9">
              <div className={styles.main_container}>
                {children && React.cloneElement(children,{auth})}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
