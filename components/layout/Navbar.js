import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import {
  faSearch,
  faShoppingBag,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Navbar({ FontAwesomeIcon }) {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.navbar_content}>
          <div className={styles.logo_content}>
            <h1>
              <Link href="/">
                <a>Beauty Booth.</a>
              </Link>
            </h1>
          </div>
          <div className={styles.search_content}>
            <input type="text" name="search" placeholder="Search For.." />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className={styles.icon_content}>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  className={`${styles.main_icon}`}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className={styles.main_icon}
                />
                <span className={`${styles.bag_count}`}>2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
