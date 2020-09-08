import React from "react";
import Header from "../common/header";

const CompanyProfile = () => {
  const data = {
    title: "Company Profile",
    subText:
      "A Company Profile landing page template freshly redesigned for Bootstrap",
  };

  return (
    <div style={{ minHeight: "700px", marginTop: "80px" }}>
      <Header data={data} />
      {/* <header className="bg-primary text-white  " style={{ height: "177px" }}>
        <div class="container text-center pt-5 ">
          <h1>Company Profile</h1>
          <p class="lead">
            A landing page template freshly redesigned for Bootstrap 4
          </p>
        </div>
        <div class="container1">
          <svg
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
            style={{ zIndex: "-2" }}
          >
            <path
              d="M0, 100 C150, 200 350, 
                0 500, 100 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "#1c18ee57" }}
            ></path>
            {/* <path
              d="M0, 100 C150, 200 350, 
                0 500, 100 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "rgba(30, 144, 225, 0.5)" }}
            ></path> */}
      {/* <path
              d="M0, 80 C300, 0 400,  
                300 500, 50 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "#1c18ee57" }}
            ></path>
            <path
              d="M0, 100 C150, 300 350, 
                0 500, 100 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "#183fee80" }}
            ></path>
          </svg>
        </div> */}
      {/* <svg
          className="bg-dar wave"
          // style={{
          //   pointerEvents: "none",
          //   width: "100%",
          //   height: "50px",
          //   preserveAspectRation: "none",
          //   ViewBox: "0 0 1920 75",
          // }}
        /> */}
      {/* </header>  */}
      {/* <div className="wave"> </div> */}

      {/* <h1>this CompanyProfile</h1> */}
    </div>
  );
};

export default CompanyProfile;
