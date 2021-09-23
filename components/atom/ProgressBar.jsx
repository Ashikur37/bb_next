import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
function ProgressBar({ active, styles }) {
  return (
    <div className={styles.pregress_bar}>
      <div className="container">
        <ul>
          <li>
            <div
              className={`${styles.wrap} ${active >= 1 ? styles.active : ""}`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </li>
          <li>
            <div
              className={`${styles.wrap} ${active >= 2 ? styles.active : ""}`}
            >
              <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </div>
          </li>
          <li>
            <div
              className={`${styles.wrap} ${active >= 3 ? styles.active : ""}`}
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProgressBar;
