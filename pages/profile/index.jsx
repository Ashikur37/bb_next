import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import ProfileAxios from "axios";
import Layout from "../../components/profile/Layout";
const Dashboard = dynamic(() => import("../../components/profile/Dashboard"));
import styles from "../../styles/UserProfilePage.module.scss";
import { useRouter } from "next/router";
function Index({ language, Auth = null, user = null }) {
  const router = useRouter();
  useEffect(() => {
    if (!Auth) {
      window.localStorage.removeItem("auth_token");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("expire_time");
      // router.push("/login");
    }
  }, [Auth, language]);

  return (
    <div>
      <Layout active="dashboard" styles={styles}>
        <Dashboard language={language} user={user} Auth={Auth} styles={styles} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  let language = context.req.language || "en";

  let Auth = null;

  if (process.env.NODE_ENV == "development") {
    Auth = context.req.cookies.auth_token;
  } else {
    Auth = context.req.universalCookies.get("auth_token") || null;
  }

  if (!Auth) {
    return {
      props: {
        language,
      },
    };
  }
  let host = `http://localhost:${process.env.PORT}`;
  ProfileAxios.defaults.headers.common["Authorization"] = `Bearer ${Auth}`;
  const user = await ProfileAxios.get(`${host}/api/profile?locale=${language}`)
    .then((res) => {
      if (res.data) {
        return res.data.user;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      language,
      Auth,
      user,
    },
  };
}
export default Index;
