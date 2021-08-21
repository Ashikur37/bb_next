import React from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";

function HeaderComponent({ url, text, t }) {
  return (
    <div className={url ? "header_component" : "header_component center"}>
      <span className="header_title">{text}</span>
      {url ? (
        <Link href={url}>
          <a className="header_see_all">
            {/* <span>Discover more</span> */}
            <span>{t("disc_more")}</span>
          </a>
        </Link>
      ) : null}
    </div>
  );
}

export default withTranslation("common")(HeaderComponent);
