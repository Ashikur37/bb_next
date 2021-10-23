import React from "react";
import { withTranslation } from "../../i18n";
import styles from "../../styles/UserProfilePage.module.scss";

function Refer({ user, t }) {
  const copyLink = () => {
    /* Get the text field */
    var copyText = document.getElementById("ref__link");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
  };
  return (
    <div className="row">
      <div className="col">
        <h2>{t("Refer A Friend")}</h2>
        <div className={`${styles.refer__friend__form} my-3`}>
          <input
            type="text"
            id="ref__link"
            defaultValue={`https://beautyboothqa.com/register?ref=${user.profile.user_code}`}
          />
          <button onClick={copyLink}>{t("copy")}</button>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("common")(Refer);
