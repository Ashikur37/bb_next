import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withTranslation } from "../../i18n";
function SideBar({ active,styles,t }) {
  const router = useRouter();

  const [page, setPage] = useState();

  useEffect(() => {
    let path = router.asPath;
    if (path == "/profile/addressbook") {
      setPage("addressbook");
    } else if (path == "/profile/refer") {
      setPage("refer");
    } else if (path == "/profile/waitlist") {
      setPage("waitlist");
    } else if (path == "/profile/orders") {
      setPage("orders");
    }else{
      setPage("dashboard");
    }
  }, [router]);

  const selectHandler = (e) => {
    router.push(`/profile/${e.target.value}`);
  };

  return (
    <div className={styles.side_container}>
      <div className={styles.side_header}>{t("My Account")}</div>
      <ul className={styles.side_list}>
        <li className={styles.side_item}>
          <Link href="/profile">
            <a className={active == "dashboard" ? styles.active : ""}>
              {t("Account Dashboard")}
            </a>
          </Link>
        </li>
        <li className={styles.side_item}>
          <Link href="/profile/refer">
            <a className={active == "refer" ? styles.active : ""}>{t("Refer Friends")}</a>
          </Link>
        </li>
        <li className={styles.side_item}>
          <Link href="/profile/addressbook">
            <a className={active == "addressbook" ? styles.active : ""}>
              {t("Address Book")}
            </a>
          </Link>
        </li>
        <li className={styles.side_item}>
          <Link href="/profile/orders">
            <a className={active == "orders" ? styles.active : ""}>{t("My Orders")}</a>
          </Link>
        </li>
        <li className={styles.side_item}>
          <Link href="/profile/waitlist">
              <a className={active == "waitlist" ? styles.active : ""}>{t("WaitList")}</a>
          </Link>
        </li>
      </ul>
      <select className={` ${styles.mb_select} form-control`} onChange={selectHandler} value={page == "dashboard" ? "/":page}>
        <option value="/">{t("Account Dashboard")}</option>
        <option value="refer">{t("Refer Friends")}</option>
        <option value="addressbook">{t("Address Book")}</option>
        <option value="orders">{t("My Orders")}</option>
        <option value="waitlist">{t("WaitList")}</option>
      </select>
    </div>
  );
}
export default withTranslation("common")(SideBar);
