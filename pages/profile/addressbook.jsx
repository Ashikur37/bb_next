import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/profile/Layout";
import ProfileAxios from "axios";
const AddressBook = dynamic(() => import("../../components/profile/AddressBook"));;

function addressbook(props) {
  return (
    <div>
      <Layout active="addressbook">
        <AddressBook {...props}/>
      </Layout>
    </div>
  );
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
    // return {
    //   redirect: {
    //     destination: `/login`,
    //     permanent: true,
    //   },
    // }
    return {
      props: {
        language
      }
    }
  }
  let host = `http://localhost:${process.env.PORT}`;
  ProfileAxios.defaults.headers.common["Authorization"] = `Bearer ${Auth}`;
  return ProfileAxios.get(`${host}/api/address`)
    .then((res) => {
      if (res.data) {
        return {
          props: {
            language,
            Auth,
            data: res.data
          }
        };
      }
    })
    .catch(err => {
      console.log(err);
      return {
        props: {
          language,
          Auth,
          data: { error: "Something went terribly wrong" }
        }
      };
    });

}
export default addressbook;
