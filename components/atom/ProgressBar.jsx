import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
function ProgressBar({ active }) {
  return (
    <div className="pregress_bar">
      <div className="container">
        <ul>
          <li>
            <div className={`wrap ${active >= 1 ? "active" : ""}`}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </li>
          <li>
            <div className={`wrap ${active >= 2 ? "active" : ""}`}>
              <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </div>
          </li>
          <li>
            <div className={`wrap ${active >= 3 ? "active" : ""}`}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProgressBar;
