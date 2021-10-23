import React from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
function MobileMenu({ lang, style }) {
  const enMenu = [
    {
      name: "New",
      slug: "new",
    },
    {
      name: "Brands",
      slug: "brands",
    },
    {
      name: "Skin Care",
      slug: "category/Skin-Care",
    },
    {
      name: "Hair Care",
      slug: "category/Hair-Care",
    },
    {
      name: "Makeup",
      slug: "category/Makeup",
    },
    {
      name: "Fragrance",
      slug: "category/Fragrance",
    },
    {
      name: "Campaigns",
      slug: "campaigns",
    },
    {
      name: "Best Selling",
      slug: "best-selling",
    },
  ];
  const arMenu = [
    {
      name: "جديد",
      slug: "new",
    },
    {
      name: "ماركات",
      slug: "brands",
    },
    {
      name: "العناية بالبشرة",
      slug: "category/Skin-Care",
    },
    {
      name: "العناية بالشعر",
      slug: "category/Hair-Care",
    },
    {
      name: "مستحضرات  التجميل",
      slug: "category/Makeup",
    },
    {
      name: "اكسسوارات",
      slug: "category/Fragrance",
    },
    {
      name: "الحملات",
      slug: "campaigns",
    },
    {
      name: "افضل المبيعات",
      slug: "best-selling",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {isMobile && (
          <div className="col">
            <div className={style.mobile_menu_wrapper}>
              {lang == "en" ? (
                <ul className={style.mobile_menu}>
                  {enMenu.map((item, index) => (
                    <li className={style.menu_li} key={index}>
                      <Link href={`/${item.slug}`}>
                        <a className="">{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={style.mobile_menu}>
                  {arMenu.map((item, index) => (
                    <li className={style.menu_li} key={index}>
                      <Link href={`/${item.slug}`}>
                        <a className="">{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
