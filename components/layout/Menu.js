import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Menu.module.scss";
import { withTranslation } from "../../i18n";
const SubMenuLi = dynamic(() => import("../atom/SubMenuLi"));
function Menu({ lang, t }) {
  const [active, setActive] = useState(-1);
  const [bodycare] = useState({
    0: [
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "bath",
        image: "body-care/bath.png",
        items: [],
        name: "Bath",
        url: "Body-Care?sub=Bath",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "bb-body-cream",
        image: "body-care/bb-body-cream.png",
        items: [],
        name: "BB Body Cream",
        url: "Body-Care?sub=BB-Body-Cream",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "body-sun-care",
        image: "body-care/body_sun.png",
        items: [],
        name: "Body Sun Care",
        url: "Body-Care?sub=Body-Sun-Care",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        image: "body-care/Cream.png",
        items: [],
        name: "Lotion",
        url: "Body-Care?sub=Lotion",
        slug: "lotion",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "intimate-care",
        image: "body-care/intimate_care.png",
        items: [],
        name: "Intimate Care",
        url: "Body-Care?sub=Intimate-Care",
      }
    ],
    1: [{
      hasItems: true,
      isParent: false,
      isCategory: true,
      slug: "hand-foot-care",
      image: "body-care/7.png",
      items: [
        {
          hasItems: false,
          isParent: false,
          isCategory: true,
          slug: "foot-mask",
          image: "foot.jpg",
          items: [],
          name: "Foot Mask",
          url: "Body-Care?sub=Hand-%26-Foot-Care%2FFoot-Mask",
        },
        {
          hasItems: false,
          isParent: false,
          isCategory: true,
          slug: "hand-cream",
          image: "9.jpg",
          items: [],
          name: "Hand Cream",
          url: "Body-Care?sub=Hand-%26-Foot-Care%2FHand-Cream",
        },
        {
          hasItems: false,
          isParent: false,
          isCategory: true,
          slug: "hand-mask",
          image: "8.jpg",
          items: [],
          name: "Hand Mask",
          url: "Body-Care?sub=Hand-%26-Foot-Care%2FHand-Mask",
        },
        {
          hasItems: false,
          isParent: false,
          isCategory: true,
          slug: "hand-sanitizer",
          image: "10.jpg",
          items: [],
          name: "Hand Sanitizer",
          url: "Body-Care?sub=Hand-%26-Foot-Care%2FHand-Sanitizer",
        },
      ],
      name: "Hand & Foot Care",
      url: "Body-Care?sub=Hand-%26-Foot-Care",
    }]
  });
  const [haircare] = useState({
    0: [
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "conditioner",
        image: "hair-care/Conditioner.png",
        items: [],
        name: "Conditioner",
        url: "Hair-Care?sub=Conditioner",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "hair-color",
        image: "hair-care/hair_color.png",
        items: [],
        name: "Hair Color",
        url: "Hair-Care?sub=Hair-Color",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "hair-cream-masks",
        image: "hair-care/hair_cream.png",
        items: [],
        name: "Hair Cream & Masks",
        url: "Hair-Care?sub=Hair-Cream-%26-Masks",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "hair-serum",
        image: "hair-care/hair_serum.png",
        items: [],
        name: "Hair Serum",
        url: "Hair-Care?sub=Hair-Serum",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "shampoo",
        image: "hair-care/shampoo.png",
        items: [],
        name: "Shampoo",
        url: "Hair-Care?sub=Shampoo",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "treatment",
        image: "hair-care/treatment.png",
        items: [],
        name: "Treatment",
        url: "Hair-Care?sub=Treatment",
      },
    ]
  });
  const [makeup] = useState({
    0: [
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "base-makeup",
        image: "make-up/base make up.png",
        items: [],
        name: "Base Makeup",
        url: "Makeup?sub=Base-Makeup",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "beauty-accessories",
        image: "make-up/accesso.png",
        items: [],
        name: "Beauty Accessories",
        url: "Makeup?sub=Beauty-Accessories",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        image: "make-up/base make up.png",
        items: [],
        name: "Blusher",
        url: "Makeup?sub=Blusher",
        slug: "blusher",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "cushion",
        image: "make-up/Cushion.png",
        items: [],
        name: "Cushion",
        url: "Makeup?sub=Cushion",
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        image: "make-up/highlighter.png",
        items: [],
        name: "Highlighter",
        url: "Makeup?sub=Highlighter",
        slug: "highlighter",
      }
    ],
    1: [
      {
        hasItems: true,
        isParent: false,
        isCategory: true,
        slug: "eye",
        image: "make-up/Eyes.png",
        items: [
          {
            hasItems: false,
            isParent: false,
            isCategory: true,
            slug: "eye-liner",
            image: "Eye liner.jpg",
            items: [],
            name: "Eye Liner",
            url: "Makeup?sub=Eye&child=Eye-Liner",
          },
          {
            hasItems: false,
            isParent: false,
            isCategory: true,
            slug: "eye-shadow",
            image: "Eye shadow.jpg",
            items: [],
            name: "Eye Shadow",
            url: "Makeup?sub=Eye&child=Eye-Shadow",
          },
          {
            hasItems: false,
            isParent: false,
            isCategory: true,
            slug: "eyebrow",
            image: "eye brow.jpg",
            items: [],
            name: "EyeBrow",
            url: "Makeup?sub=Eye&child=EyeBrow",
          },
          {
            hasItems: false,
            isParent: false,
            isCategory: true,
            slug: "mascara",
            image: "mascara.jpg",
            items: [],
            name: "Mascara",
            url: "Makeup?sub=Eye&child=Mascara",
          },
        ],
        name: "Eye",
        url: "Makeup?sub=Eye",
      },
      {
        hasItems: true,
        isParent: false,
        isCategory: true,
        slug: "lip",
        image: "make-up/Lip.png",
        items: [
          {
            hasItems: false,
            isParent: false,
            isCategory: true,
            slug: "lip-tint",
            image: "Lip tint.jpg",
            items: [],
            name: "Lip Tint",
            url: "Makeup?sub=Lip&child=Lip-Tint",
          },
          {
            hasItems: false,
            isParent: false,
            isCategory: true,
            slug: "lipstick",
            image: "lipstick.jpg",
            items: [],
            name: "lipstick",
            url: "Makeup?sub=Lip&child=lipstick",
          },
        ],
        name: "Lip",
        url: "Makeup?sub=Lip",
      },
    ]
  });
  const [accessories] = useState({
    0: [
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        name: "Beauty Tools",
        url: "Accessories?sub=Beauty-Tools",
        image:"accesso.jpg",
        slug: "beauty-tools",
        items: [],
      },
      {
        hasItems: false,
        isParent: false,
        isCategory: true,
        name: "Women's Fashion Jewelry",
        url: "Accessories?sub=Women's-Fashion-Jewelry",
        image:"accesso.jpg",
        slug: "womens-fashion-jewelry-accessories",
        items: [],
      },
    ]
  })
  const handleHover = (e) => {
    setActive(e.target.dataset.index);
  };

  return (
    <div className={`container ${styles.menu_container}`}>
      <div className="row">
        <nav className={styles.nav}>
          <ul className={styles.nav_main_ul}>
            <li className={styles.nav_main_li}>
              <Link href="/new">
                <a className={styles.nav_main_a}> {t("New")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/brands">
                <a className={styles.nav_main_a}> {t("Brands")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Skin-Care">
                <a className={styles.nav_main_a} href="/category/Skin-Care" data-index={1} onMouseEnter={handleHover}> {t("Skin Care")}</a>
              </Link>
              <ul className={styles.sub_menu}>
                {
                  active == 1 && (<>
                    <li className={styles.sub_menu_li}>
                      <ul className={styles.sub_menu_li_ul}>
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=ampoule"}
                          main={true}
                          Link={Link}
                          name={t("Ampoule")}
                          img="skin-care/Ampoule.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Bundle-Set"}
                          main={true}
                          Link={Link}
                          name={t("Bundle Set")}
                          img="skin-care/Bundle.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Cream"}
                          main={true}
                          Link={Link}
                          name={t("Cream")}
                          img="skin-care/Cream.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Essence"}
                          main={true}
                          Link={Link}
                          name={t("Essence")}
                          img="skin-care/Essence.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Face-Roller"}
                          main={true}
                          Link={Link}
                          name={t("Face Roller")}
                          img="skin-care/Roller.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Kit"}
                          main={true}
                          Link={Link}
                          name={t("Kit")}
                          img="skin-care/Kit.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Scrub"}
                          main={true}
                          Link={Link}
                          name={t("Scrub")}
                          img="skin-care/Scrub.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Serum"}
                          main={true}
                          Link={Link}
                          name={t("Serum")}
                          img="skin-care/Serum.png"
                        />
                      </ul>
                    </li>
                    <li className={styles.sub_menu_li}>
                      <ul className={styles.sub_menu_li_ul}>
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Sun-Care"}
                          main={true}
                          Link={Link}
                          name={t("Sun Care")}
                          img="skin-care/Sun_cream.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Soothing-Gel"}
                          main={true}
                          Link={Link}
                          name={t("Soothing Gel")}
                          img="skin-care/Soothing_gel.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Toner"}
                          main={true}
                          Link={Link}
                          name={t("Toner")}
                          img="skin-care/Toner.png"
                        />
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Lip-Care"}
                          main={true}
                          Link={Link}
                          name={t("Lip Care")}
                          img="skin-care/Lipsticks.png"
                          t={t}
                          childs={[
                            {
                              name: t("Lip Balm"),
                              url: "/category/Skin-Care?sub=Lip-Care&child=Lip-Balm",
                            },
                            {
                              name: t("Lip Sleeping Mask"),
                              url: "/category/Skin-Care?sub=Lip-Care&child=Lip-Sleeping-Mask",
                            },
                          ]}
                        />
                      </ul>
                    </li>
                    <li className={styles.sub_menu_li}>
                      <ul className={styles.sub_menu_li_ul}>
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Cleansers"}
                          main={true}
                          Link={Link}
                          name={t("Cleansers")}
                          img="skin-care/Cleaner.png"
                          t={t}
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
                              name: "Make Up Removers",
                              url: "/category/Skin-Care?sub=Cleansers&child=Make-Up-Removers",
                            },
                          ]}
                        />
                      </ul>
                    </li>
                    <li className={styles.sub_menu_li}>
                      <ul className={styles.sub_menu_li_ul}>
                        <SubMenuLi
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Eye"}
                          main={true}
                          Link={Link}
                          name={t("Eye")}
                          img="skin-care/Eye.png"
                          t={t}
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
                          lang={lang}
                          styles={styles}
                          url={"/category/Skin-Care?sub=Masks-&-Exfolators"}
                          main={true}
                          Link={Link}
                          name={t("Masks & Exfolators")}
                          img="skin-care/Mask.png"
                          t={t}
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
                <a className={styles.nav_main_a} data-index={2} onMouseEnter={handleHover}> {t("Body Care")}</a>
              </Link>
              <ul className={styles.sub_menu}>
                {active == 2 && <>
                  <li className={styles.sub_menu_li}>
                    <ul className={styles.sub_menu_li_ul}>
                      {
                        bodycare[0].map((item, index) => (
                          <SubMenuLi
                            lang={lang}
                            key={index}
                            styles={styles}
                            url={`/category/${item.url}`}
                            Link={Link}
                            name={t(item.name)}
                            img={item.image}
                            childs={item.items}
                            t={t}
                          />
                        ))
                      }
                    </ul>
                  </li>
                  <li className={styles.sub_menu_li}>
                    <ul className={styles.sub_menu_li_ul}>
                      {
                        bodycare[1].map((item, index) => (
                          <SubMenuLi
                            lang={lang}
                            key={index}
                            styles={styles}
                            url={`/category/${item.url}`}
                            Link={Link}
                            name={t(item.name)}
                            img={item.image}
                            t={t}
                            childs={item.items}
                          />
                        ))
                      }
                    </ul>
                  </li>
                </>}
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Hair-Care">
                <a className={styles.nav_main_a} data-index={3} onMouseEnter={handleHover}> {t("Hair Care")}</a>
              </Link>
              <ul className={styles.sub_menu}>
                {active == 3 && <>
                  <li className={styles.sub_menu_li}>
                    <ul className={styles.sub_menu_li_ul}>
                      {
                        haircare[0].map((item, index) => (
                          <SubMenuLi
                            lang={lang}
                            key={index}
                            styles={styles}
                            url={`/category/${item.url}`}
                            Link={Link}
                            name={t(item.name)}
                            img={item.image}
                            childs={item.items}
                            t={t}
                          />
                        ))
                      }
                    </ul>
                  </li>
                </>}
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Makeup">
                <a className={styles.nav_main_a} data-index={4} onMouseEnter={handleHover}> {t("Makeup")}</a>
              </Link>
              <ul className={styles.sub_menu}>
                {active == 4 && <>
                  <li className={styles.sub_menu_li}>
                    <ul className={styles.sub_menu_li_ul}>
                      {
                        makeup[0].map((item, index) => (
                          <SubMenuLi
                            lang={lang}
                            key={index}
                            styles={styles}
                            url={`/category/${item.url}`}
                            Link={Link}
                            name={t(item.name)}
                            img={item.image}
                            childs={item.items}
                            t={t}
                          />
                        ))
                      }
                    </ul>
                  </li>
                  <li className={styles.sub_menu_li}>
                    <ul className={styles.sub_menu_li_ul}>
                      {
                        makeup[1].map((item, index) => (
                          <SubMenuLi
                            lang={lang}
                            key={index}
                            styles={styles}
                            url={`/category/${item.url}`}
                            Link={Link}
                            name={t(item.name)}
                            img={item.image}
                            childs={item.items}
                            t={t}
                          />
                        ))
                      }
                    </ul>
                  </li>
                </>}
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Fragrance">
                <a className={styles.nav_main_a}> {t("Fragrance")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/category/Accessories">
                <a className={styles.nav_main_a} data-index={6} onMouseEnter={handleHover}> {t("Accessories")}</a>
              </Link>
              <ul className={styles.sub_menu}>
                {active == 6 && <>
                  <li className={styles.sub_menu_li}>
                    <ul className={styles.sub_menu_li_ul}>
                      {
                        accessories[0].map((item, index) => (
                          <SubMenuLi
                            lang={lang}
                            key={index}
                            styles={styles}
                            url={`/category/${item.url}`}
                            Link={Link}
                            name={t(item.name)}
                            img={item.image}
                            childs={item.items}
                            t={t}
                          />
                        ))
                      }
                    </ul>
                  </li>
                </>}
              </ul>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/campaigns">
                <a className={styles.nav_main_a}> {t("Campaigns")}</a>
              </Link>
            </li>
            <li className={styles.nav_main_li}>
              <Link href="/best-selling">
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
