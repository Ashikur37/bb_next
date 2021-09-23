import React, { useState, useEffect } from "react";
import axios from "../../redux/actions/axios";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import RegisterStepTwo from "./Register/RegisterStepTwo";
import RegisterStepOne from "./Register/RegisterStepOne";

function RegisterPage() {
  const [step, setStep] = useState(1);

  const changeStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div className="mt-3 register_page">
        <Helmet>
          <title>Register - Beauty Booth</title>
        </Helmet>
        {step == 1 && (
          <RegisterStepOne
            changeStep={changeStep}
            phone={
              localStorage.getItem("number")
                ? localStorage.getItem("number")
                : null
            }
          />
        )}
        {step == 2 && (
          <RegisterStepTwo
            phone={
              localStorage.getItem("number")
                ? localStorage.getItem("number")
                : null
            }
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
