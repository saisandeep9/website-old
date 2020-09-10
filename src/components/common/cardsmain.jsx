import React from "react";
import "./cardsmain.css";
import { Link } from "react-router-dom";

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
          <Link to={data.data.website} target="_blank">
            <button className="btn ">
              <h6>Go to web site</h6>
            </button>
          </Link>
          <Link to={data.data.app} target="_blank" rel="">
            <img
              src="images/googlePaly.png"
              alt={"google paly store"}
              style={{ width: "250px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
