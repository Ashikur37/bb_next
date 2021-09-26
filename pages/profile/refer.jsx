import React from 'react'
import Layout from '../../components/profile/Layout'
import Refer from '../../components/profile/Refer'
import ProfileAxios from "axios";
function refer({user}) {
    return (
        <div>
            <Layout active="refer">
                <Refer user={user} />
            </Layout>
        </div>
    )
}
export async function getServerSideProps(context) {

    let language = context.req.language || "en";
  
    let Auth = null;
    
    if (process.env.NODE_ENV == "development") {
      Auth = context.req.cookies.auth_token;
    } else {
      Auth = context.req.universalCookies.get('auth_token') || null;
    }
  
    if (!Auth) {
      return {
        props: {
          language
        }
      }
    }

    let host = `http://localhost:${process.env.PORT}`;
    ProfileAxios.defaults.headers.common["Authorization"] = `Bearer ${Auth}`;
    const user = await ProfileAxios.get(`${host}/api/profile?locale=${language}`)
      .then((res) => {
        if (res.data) {
          return res.data.user;
        }
      })
      .catch(err => {
        console.log(err);
      });
  
    return {
      props: {
        language,
        Auth,
        user
      }
    };
  }
export default refer
