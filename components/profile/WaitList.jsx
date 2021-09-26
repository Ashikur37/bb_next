import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/UserProfilePage.module.scss"

function WaitList({ language, data, Auth }) {
  const [waitList, setWaitList] = useState();
  useEffect(() => {    
        setWaitList(data);
  }, [Auth,language]);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {waitList && waitList.map((list,key) => (
              <tr key={key}>
              <th scope="row">{key+1}</th>
              <td><img style={{width:80,height:80}} src={list.product.image} alt="" /></td>
              <td>{list.product.name}</td>
              <td><Link href={`/product/${list.product.slug}`}><a className="btn btn-info btn-sm">visit</a></Link></td>
            </tr>
          ))
        }
          
        </tbody>
      </table>
    </div>
  );
}

export default WaitList;
