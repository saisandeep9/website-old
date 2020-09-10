import React from "react";
import Form from "../common/form";
import Paper from "@material-ui/core/Paper";
import { Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const coverPage = (props) => {
  var background = { backgroundSize: "cover", width: "100%", height: "700px" };
  var backgroundmobile = {
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
  };
  var textStyle = {
    position: "absolute",
    top: "40%",
    left: "70%",
    right: "3%",
    background: "#575755c5",
  };
  var buttonmobileview = {
    position: "absolute",
    top: "20%",
    left: "60%",
    right: "10%",
  };
  return (
    <div
    // style={{
    //   backgroundImage: `url(images/c3.jpg)`,
    //   backgroundRepeat: "none-repeat",
    //   // width: "100%",
    //   height: "600px",
    // }}
    >
      {/* <img
        style={{ display: "none" }}
        src="images/c3.jpg"
        // alt={post.imageText}
        style={{ width: "100%", height: "700px" }}
      ></img> */}

      {/* <Paper
      // style={{
      //   backgroundImage: `url(images/c3.jpg)`,
      //   width: "100%",
      //   height: "600px",
      // }}
      >
    
        <Form />
      </Paper> */}
      <div className="d-none d-md-block" style={{ width: "auto" }}>
        <Image
          style={background}
          // responsive
          src="images/c3.jpg"
        ></Image>

        <div style={textStyle}>
          <Form />
        </div>
      </div>
      <div className="d-sm-block d-md-none ">
        <Image
          style={backgroundmobile}
          // responsive
          src="images/covermobileview.jpg"
        ></Image>
        <div style={buttonmobileview}>
          <Link to={"/contactus"}>
            {" "}
            <button className="btn btn-primary">Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default coverPage;
