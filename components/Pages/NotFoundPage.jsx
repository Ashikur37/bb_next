import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
function NotFoundPage() {
  return (
    <>
      <div className="not_found_page">
        <div className="container-fluid">
          <div className="row">
            <div className="mainbox">
              <div className="err">4</div>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                spin={true}
                className="far"
              />
              <div className="err2">4</div>
              <div className="msg">
                Maybe this page moved? Got deleted? Is hiding out in quarantine?
                Never existed in the first place?
                <p>
                  Let&apos;s go <Link to="/">HOME</Link> and try from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
