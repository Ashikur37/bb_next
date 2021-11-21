import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Notice from "./Notice";
import Divider from "./partials/Divider";

function NavbarWrapper({ FontAwesomeIcon, lang, styles }) {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
    return () => window.removeEventListener("scroll", () => {});
  });
  return (
    <div className={`navbar_wrap ${isScroll ? "sticky fade_in_down" : ""}`}>
      <Notice />
      <Divider />
      
      <Navbar FontAwesomeIcon={FontAwesomeIcon} lang={lang} styles={styles} />
      <Divider />
      <Menu lang={lang} />
      <Divider />
    </div>
  );
}

export default NavbarWrapper;
