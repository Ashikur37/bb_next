import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faPaperPlane,
  faCheck,
  faUserCheck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
function ProgressBar({ active, styles, online = false }) {
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
              <FontAwesomeIcon icon={online ? faUserCheck : faCheck} />
            </div>
          </li>
          {online && (
            <li>
              <div
                className={`${styles.wrap} ${active >= 4 ? styles.active : ""}`}
              >
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProgressBar;
