import Link from "next/link";
import React from "react";
import { withTranslation } from "../../i18n";

function Dashboard({ language, Auth = null, user = null, styles, t }) {
  return (
    <div className={styles.welcome}>
      {user ? (
        <>
          <h2>Hello , {user && user.first_name}!</h2>
          <p>
            {t(
              "acc_info"
            )}
          </p>

          <h4 className="mt-3">{t("ACCOUNT INFORMATION")}</h4>
          <div className={styles.account_inner}>
            <ul className={styles.ac_info}>
              <li className={styles.ac_name}>
                <b>{t("Contact information")}</b> |{" "}
                <Link href="/edit-profile">Edit</Link>{" "}
              </li>
              <li className={styles.ac_name}>
                {user.first_name} {user.last_name}
              </li>
              <li className={styles.ac_name}>{user.email} </li>
              <li className={styles.ac_name}>
                <Link href="/edit-profile">{t("Change Password")}</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default withTranslation("common")(Dashboard);
