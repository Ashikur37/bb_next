import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container">
      <div
        className="scrollTopWrap"
        style={{
          display: showScroll ? "flex" : "none",
        }}
      >
        <div
          className="scroll_top"
          onClick={scrollTop}
          style={{
            height: 40,
            width: 40,
          }}
        >
          <FontAwesomeIcon className="scrollTop" icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
}

export default ScrollTop;
