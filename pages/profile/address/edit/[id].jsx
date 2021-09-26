import React, { useState, useEffect, } from 'react';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Cookies from "universal-cookie"
import axios from 'axios';
const cookie = new Cookies();
const Layout = dynamic(() => import('../../../../components/profile/Layout'));
const EditAddress = dynamic(() => import('../../../../components/profile/EditAddress'));

const Index = () => {
    const router = useRouter();
    const [token] = useState(cookie.get('auth_token'));
    const [address, setAddress] = useState();
    useEffect(() => {
        if (token && router) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            axios.get(`/api/account/getAddress?id=${router.query.id}`)
                .then(res => { setAddress(res.data) })
                .catch(err => {
                    console.log(err.response);
                });
        }
    }, [token, router]);
    return (
        <div>
            <Layout active="addressbook">
                {
                    address ?
                        <EditAddress old_address={address} token={token} />
                        :
                        null
                }
            </Layout>
        </div>
    )
}
export default Index;