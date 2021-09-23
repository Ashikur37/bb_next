import React, { useState } from "react";
import dynamic from "next/dynamic";
import { withTranslation } from "../../i18n";

const RegisterStepTwo = dynamic(() =>
  import("../../components/Pages/Register/RegisterStepTwo")
);
const RegisterStepOne = dynamic(() =>
  import("../../components/Pages/Register/RegisterStepOne")
);

function RegisterPage({t}) {
  const [step, setStep] = useState(1);

  const changeStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div className="mt-3 register_page">
        {step == 1 && (
          <RegisterStepOne
          t={t}
            changeStep={changeStep}
            phone={
              process.browser
                ? localStorage.getItem("number")
                  ? localStorage.getItem("number")
                  : null
                : null
            }
          />
        )}
        {step == 2 && (
          <RegisterStepTwo
          t={t}
            phone={
              process.browser
                ? localStorage.getItem("number")
                  ? localStorage.getItem("number")
                  : null
                : null
            }
          />
        )}
      </div>
    </>
  );
}

export default withTranslation("common")(RegisterPage);
