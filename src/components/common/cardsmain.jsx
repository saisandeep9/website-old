import React from "react";
import "./cardsmain.css";

const CardMain = (data) => {
  return (
    <div className="maincard col-md-4   ">
      <img
        src={data.data.img}
        className="icon rounded "
        alt=""
        // style={{ width: "35%" }}
      />
      <div className=" ">
        <h5 className="text-secondary  text-left">{data.data.title}</h5>

        <p className=" text-left  ">{data.data.text}</p>
        <div className="align-self-end mt-auto">
          {/* <div className="v"> */}
          <a href={data.data.website} target="_blank">
            {" "}
            <button className="btn ">
              <h5>Go to web site</h5>
            </button>
          </a>
          <a href={data.data.app} target="_blank">
            <img
              src="images/googlePaly.png"
              className=" "
              alt=""
              style={{ width: "250px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
