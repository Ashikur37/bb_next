import Link from "next/link";
import React from "react";

function Dashboard({ language, Auth = null, user =  null,styles}) {
  return (
    <div className={styles.welcome}>
      { user ? <>
        <h2>Hello , {user && user.first_name}!</h2>
        <p>
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
      </p>

        <h4 className="mt-3">ACCOUNT iNFORMATION</h4>
        <div className={styles.account_inner}>
          <ul className={styles.ac_info}>
            <li className={styles.ac_name}><b>Contact information</b> | <Link href="/edit-profile">Edit</Link> </li>
            <li className={styles.ac_name}>{user.first_name} {user.last_name}</li>
            <li className={styles.ac_name}>{user.email} </li>
            <li className={styles.ac_name}><Link href="/edit-profile">Change Password</Link></li>
          </ul>
        </div>
      </> : ""}
    </div>
  );
}

export default Dashboard;
