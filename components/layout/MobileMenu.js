import React from "react";
function MobileMenu({ lang, Link, style, isMobile }) {
  const enMenu = [
    {
      name: "New",
      slug: "/new",
    },
    {
      name: "Brands",
      slug: "/new",
    },
    {
      name: "Skin Care",
      slug: "/new",
    },
    {
      name: "Hair Care",
      slug: "/new",
    },
    {
      name: "New",
      slug: "/new",
    },
    {
      name: "Brands",
      slug: "/new",
    },
    {
      name: "Skin Care",
      slug: "/new",
    },
    {
      name: "Hair Care",
      slug: "/new",
    },
  ];
  const arMenu = [
    {
      name: "New",
      slug: "/new",
    },
    {
      name: "Skin Care",
      slug: "/new",
    },
    {
      name: "Hair Care",
      slug: "/new",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {isMobile && (
            <div className={style.mobile_menu_wrapper}>
              {lang == "en" ? (
                <ul className={style.mobile_menu}>
                  {enMenu.map((item, index) => (
                    <li className={style.menu_li} key={index}>
                      <Link href={`/concern/${item.slug}`}>
                        <a className="">{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={style.mobile_menu}>
                  {arMenu.map((item, index) => (
                    <li className={style.menu_li} key={index}>
                      <Link href={`/concern/${item.slug}`}>
                        <a className="">{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
