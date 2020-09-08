import React from "react";
import "./cardsmain.css";

const CardMain = (data) => {
  return (
    <div className="maincard col-md-4   ">
      <img
        src={data.data.img}
        className="icon rounded "
        alt={data.data.title}
      />
      <div className=" ">
        <h5 className="text-secondary  text-left">{data.data.title}</h5>

        <p className=" text-left  ">{data.data.text} </p>
        <div className="align-self-end mt-auto">
          <a href={data.data.website} target="_blank">
            <button className="btn ">
              <h6>Go to web site</h6>
            </button>
          </a>
          <a href={data.data.app} target="_blank">
            <img
              src="images/googlePaly.png"
              alt={"google paly store"}
              style={{ width: "250px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
