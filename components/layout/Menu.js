import Link from "next/link";
import React from "react";
import styles from "../../styles/Menu.module.scss";
import SubMenuLi from "../atom/SubMenuLi";
function Menu() {
  return (
    <div className="container">
      <div className="row">
        <nav className={styles.nav}>
          <ul className={styles.nav_main_ul}>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> New</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> Brands</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Skin-Care">
                <a className={styles.nav_main_a}> Skin Care</a>
              </Link>
              <ul className={styles.sub_menu}>
                <li className={styles.sub_menu_li}>
                  <ul className={styles.sub_menu_li_ul}>
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=ampoule"}
                      main="true"
                      name="Ampoule"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Bundle-Set"}
                      main="true"
                      name="Bundle Set"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Cream"}
                      main="true"
                      name="Cream"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Essence"}
                      main="true"
                      name="Essence"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Face-Roller"}
                      main="true"
                      name="Face Roller"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Kit"}
                      main="true"
                      name="kit"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Scrub"}
                      main="true"
                      name="Scurb"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Serum"}
                      main="true"
                      name="Serum"
                    />
                  </ul>
                </li>
                <li className={styles.sub_menu_li}>
                  <ul className={styles.sub_menu_li_ul}>
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Sun-Care"}
                      main="true"
                      name="Sun Care"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Soothing-Gel"}
                      main="true"
                      name="Soothing Gel"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Toner"}
                      main="true"
                      name="Toner"
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?Lip-Care"}
                      main="true"
                      name="Lip Care"
                      childs={[
                        {
                          name: "Lip-Blam",
                          url: "/category/Skin-Care?sub=Lip-Care&child=Lip-Balm",
                        },
                        {
                          name: "Lip Sleeping Mask",
                          url: "/category/Skin-Care?sub=Lip-Care&child=Lip-Sleeping-Mask",
                        },
                      ]}
                    />
                  </ul>
                </li>
                <li className={styles.sub_menu_li}>
                  <ul className={styles.sub_menu_li_ul}>
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Cleansers"}
                      main="true"
                      name="Cleansers"
                      childs={[
                        {
                          name: "Cleansing Balms",
                          url: "/category/Skin-Care?sub=Cleansers&child=Cleansing-Balms",
                        },
                        {
                          name: "Cleansing Gels",
                          url: "/category/Skin-Care?sub=Cleansers&child=Cleansing-Gels",
                        },
                        {
                          name: "Cleansing Oils",
                          url: "/category/Skin-Care?sub=Cleansers&child=Cleansing-Oils",
                        },
                        {
                          name: "Cleansing Waters",
                          url: "/category/Skin-Care?sub=Cleansers&child=Cleansing-Waters",
                        },
                        {
                          name: "Face Wipes",
                          url: "/category/Skin-Care?sub=Cleansers&child=Face-Wipes",
                        },
                        {
                          name: "Facial Cleansing bars",
                          url: "/category/Skin-Care?sub=Cleansers&child=Facial-Cleansing-bars",
                        },
                        {
                          name: "Foaming Cleansers",
                          url: "/category/Skin-Care?sub=Cleansers&child=Foaming-Cleansers",
                        },
                        {
                          name: "Make-Up-Removers",
                          url: "/category/Skin-Care?sub=Cleansers&child=Make-Up-Removers",
                        },
                      ]}
                    />
                  </ul>
                </li>
                <li className={styles.sub_menu_li}>
                  <ul className={styles.sub_menu_li_ul}>
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Eye"}
                      main="true"
                      name="Eye"
                      childs={[
                        {
                          name: "Eye Cream",
                          url: "/category/Skin-Care?sub=Cleansers&child=Eye-Cream",
                        },
                        {
                          name: "Eye Patch",
                          url: "/category/Skin-Care?sub=Cleansers&child=Eye-Patch",
                        },
                        {
                          name: "Eye Serum",
                          url: "/category/Skin-Care?sub=Cleansers&child=Eye-Serum",
                        },
                      ]}
                    />
                    <SubMenuLi
                      styles={styles}
                      url={"/category/Skin-Care?sub=Masks-&-Exfolators"}
                      main="true"
                      name="Masks & Exfolators"
                      childs={[
                        {
                          name: "Exfoliators",
                          url: "/category/Skin-Care?sub=Cleansers&child=Exfoliators",
                        },
                        {
                          name: "Mask Sheet",
                          url: "/category/Skin-Care?sub=Cleansers&child=Mask-Sheet",
                        },
                        {
                          name: "Patchs",
                          url: "/category/Skin-Care?sub=Cleansers&child=Patchs",
                        },
                        {
                          name: "Wash Off Mask",
                          url: "/category/Skin-Care?sub=Cleansers&child=Wash-Off-Mask",
                        },
                      ]}
                    />
                  </ul>
                </li>
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Body-Care">
                <a className={styles.nav_main_a}> Body Care</a>
              </Link>
              <ul className={styles.sub_menu}> habi jabi</ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> Body Care</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> Fragrance</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> Accessories</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> Campaigns</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> Best Sellings</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
