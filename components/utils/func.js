const checkRtl = () => {
  let value = false;
  if (process.browser && document.body.classList.contains("rtl")) {
    value = true;
  }
  return value;
};

export default checkRtl;
