import Image from "next/image";
function SubMenuLi({ lang, url, t = null, styles, name, img, Link, childs }) {
  return (
    <li>
      <Link href={url}>
        <a className={styles.main}>
          {" "}
          <Image
            src={`/images/${img}`}
            alt="logo"
            width="30"
            height="30"
          />{" "}
          {name}
        </a>
      </Link>
      {childs && (
        <ul className={styles.childs} dir={lang == 'ar_QA' ? "rtl":"ltr"}>
          {childs.map((child, index) => (
            <li key={index}>
              <Link href={child.url}>
                <a>{t(child.name)}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SubMenuLi;
