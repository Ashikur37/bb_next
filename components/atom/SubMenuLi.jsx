import Link from "next/link";
import React from "react";
import Image from "next/image";
function SubMenuLi({ url, main = false, styles, name, img, childs }) {
  return (
    <li>
      <Link href={url}>
        <a className={main ? styles.main : null}>
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
        <ul className={styles.childs}>
          {childs.map((child, index) => (
            <li key={index}>
              <Link href={child.url}>
                <a>{child.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SubMenuLi;
