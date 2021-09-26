import React from 'react'
import AddAddress from '../../../../components/profile/AddAddress'
import Layout from '../../../../components/profile/Layout'

function index(props) {
    return (
        <div>
            <Layout>
                <AddAddress {...props}/>
            </Layout>
        </div>
    )
}

export default index;
