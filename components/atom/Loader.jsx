import React from "react";

function Loader() {
  return (
    <div className="loader_container">
      <img src="/images/svg/loading.svg" alt="loading" />
      {/* <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div> */}
    </div>
  );
}

export default Loader;
