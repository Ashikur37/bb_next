import Link from "next/link";
import React from "react";

function SubMenuLi({ url, main = false, styles, name, childs }) {
  return (
    <li>
      <Link href={url}>
        <a className={main ? styles.main : null}>{name}</a>
      </Link>
      {childs && (
        <ul className={styles.childs}>
          {childs.map((child) => (
            <li>
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
