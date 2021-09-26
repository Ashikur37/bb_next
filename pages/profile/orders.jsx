import React from 'react';
import dynamic from "next/dynamic";
import ProfileAxios from "axios";
import Layout from '../../components/profile/Layout';
const Orders = dynamic(() => import('../../components/profile/Orders'));

function orders({
    language,
    Auth,
    data
}) {
    return (
        <div>
            <Layout active="orders" >
                <Orders language={language} data={data} Auth={Auth}/>
            </Layout>
        </div>
    )
}
export async function getServerSideProps(context) {
    let language = context.req.language || "en";
    // let Auth = context.req.universalCookies.get('auth_token') || null;
    let Auth = null;
  
    if (process.env.NODE_ENV == "development") {
      Auth = context.req.cookies.auth_token;
    } else {
      Auth = context.req.universalCookies.get('auth_token') || null;
    }
    
    let host = `http://localhost:${process.env.PORT}`;
    if (!Auth) {
        return {
            props: {
              language
            }
          }
    }
    ProfileAxios.defaults.headers.common["Authorization"] = `Bearer ${Auth}`;
    const data = await ProfileAxios.get(`${host}/api/profile?locale=${language}&query=order_only`)
        .then((res) => {
            if (res.data) {
                return res.data;
            }
        })
        .catch(err => {
            console.log(err);
        });

    return {
        props: {
            language,
            Auth,
            data
        }
    };
}
export default orders;
