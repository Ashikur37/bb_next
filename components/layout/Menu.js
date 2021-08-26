import Link from "next/link";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Menu.module.scss";
import { withTranslation } from "../../i18n";
const SubMenuLi = dynamic(() => import("../atom/SubMenuLi"));
function Menu({ t }) {
  const [active, setActive] = useState(-1);
  const handleHover = useCallback((e) => {
    setActive(e.target.dataset.index);
  }, []);
  const handleLeave = useCallback((e) => {
    const DOM = document.elementFromPoint(e.clientX, e.clientY);
    console.log(DOM.dataset.sub, active);
    if (typeof DOM.dataset.sub == "undefined") {
      setActive(-1);
    }else if (active >= 0 && active != DOM.dataset.sub){
      setActive(-1);
    }
  }, []);
  return (
    <div className={`container ${styles.menu_container}`}>
      <div className="row">
        <nav className={styles.nav}>
          <ul className={styles.nav_main_ul}>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("New")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Brands")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Skin-Care">
                <a className={styles.nav_main_a} data-index={1} onMouseEnter={handleHover} onMouseLeave={handleLeave}> {t("Skin Care")}</a>
              </Link>
              <ul className={styles.sub_menu} data-sub={1}>
                {
                  active == 1 && (<>
                    <li className={styles.sub_menu_li}>
                      <ul className={styles.sub_menu_li_ul}>
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=ampoule"}
                          main="true"
                          name="Ampoule"
                          img="skin-care/Ampoule.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Bundle-Set"}
                          main="true"
                          name="Bundle Set"
                          img="skin-care/Bundle.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Cream"}
                          main="true"
                          name="Cream"
                          img="skin-care/Cream.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Essence"}
                          main="true"
                          name="Essence"
                          img="skin-care/Essence.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Face-Roller"}
                          main="true"
                          name="Face Roller"
                          img="skin-care/Roller.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Kit"}
                          main="true"
                          name="kit"
                          img="skin-care/Kit.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Scrub"}
                          main="true"
                          name="Scurb"
                          img="skin-care/Scrub.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Serum"}
                          main="true"
                          name="Serum"
                          img="skin-care/Serum.png"
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
                          img="skin-care/Sun_cream.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Soothing-Gel"}
                          main="true"
                          name="Soothing Gel"
                          img="skin-care/Soothing_gel.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?sub=Toner"}
                          main="true"
                          name="Toner"
                          img="skin-care/Toner.png"
                        />
                        <SubMenuLi
                          styles={styles}
                          url={"/category/Skin-Care?Lip-Care"}
                          main="true"
                          name="Lip Care"
                          img="skin-care/Lipsticks.png"
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
                          img="skin-care/Cleaner.png"
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
                          img="skin-care/Eye.png"
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
                          img="skin-care/Mask.png"
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
                  </>)
                }
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Body-Care">
                <a className={styles.nav_main_a} data-index={2} onMouseEnter={handleHover} onMouseLeave={handleLeave}> {t("Body Care")}</a>
              </Link>
              <ul className={styles.sub_menu} data-sub={2}>
                {active == 2 && <>
                  habi jabi
                </>}
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Hair Care")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Makeup")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Fragrance")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Accessories")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Campaigns")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/">
                <a className={styles.nav_main_a}> {t("Best Selling")}</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default withTranslation("menu")(Menu);
