import React from "react";

const Header = (data) => {
  return (
    <div>
      <header className="bg-primary text-white  " style={{ height: "177px" }}>
        <div className="container text-center pt-5 ">
          <h1> {data.data.title} </h1>
          <p>{data.data.subText}</p>
        </div>
        <div className="container1" style={{ marginTop: "-10px" }}>
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
      </header>
    </div>
  );
};

export default Header;
