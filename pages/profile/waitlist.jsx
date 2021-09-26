import React from 'react';
import dynamic from "next/dynamic";
import ProfileAxios from "axios";
import Layout from '../../components/profile/Layout'
const WaitList = dynamic(()=>import('../../components/profile/WaitList')) ;

function waitlist({language, Auth, data}) {
    return (
        <div>
            <Layout active="waitlist" >
                <WaitList language={language} data={data} Auth={Auth}/>
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

    if (!Auth) {
        return {
            redirect: {
                destination: `/login`,
                permanent: true,
            },
        }
    }
    
    let host = `http://localhost:${process.env.PORT}`;
    ProfileAxios.defaults.headers.common["Authorization"] = `Bearer ${Auth}`;
    const data = await ProfileAxios.get(`${host}/api/getwaitlist`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
        console.log(err);
      return;
    });
    
    return {
        props: {
            language,
            Auth,
            data
        }
    };
}
export default waitlist
