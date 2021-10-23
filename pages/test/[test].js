import React from 'react'
import axios from "../../redux/actions/axios";

function Test({slug,product}) {

    return (
        <div className="container">
            
             Serverside props {product && product.title}
        </div>
    )
}

export async function getServerSideProps(context) {

  let language = context.req.language || "en";
  // Fetch data from external API
  let slug = context.params.test;

// let product = await axios
//       .get(`${language}/getdata/product/${encodeURI(slug)}`)
//       .then((res) => {
//         return res.data;
//       }).catch(err => {console.log(err);});

const result = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await result.json()

  return{
      props:{
          slug:slug,
          product:data
      }
  }
}

export default Test
