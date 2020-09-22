import React from "react";

const Header = (data) => {
  return (
    <div>
      <header
        className=" text-white  "
        style={{
          height: "200px",
          // backgroundColor: "#393185",
          background: " linear-gradient(var(--rstlog-color) 30%, #495bef 100%)",
          // marginBottom: "40px",
        }}
      >
        <div className="container text-center  " style={{ padding: "50px 0" }}>
          <h1> {data.data.title} </h1>
          <div className="title-line" />
          <p>{data.data.subText}</p>
        </div>

        {/* ........... */}

        {/* ................... */}
      </header>
      <div
        className="container1"
        style={{ marginTop: "-70px", backgroundColor: "white" }}
      >
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          style={{ zIndex: "-2" }}
        >
          <path
            d="M0, 100 C150, 200 350, 
        0 500, 100 L500, 00 L0, 0 Z"
            style={{ stroke: "none", fill: "#1c18ee1c" }}
          ></path>

          <path
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
      </div>
    </div>
  );
};

// const HeaderWave = () => {
//   return <div></div>;
// };

export default Header;
