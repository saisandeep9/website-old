import React from "react";
import "./sideNavBar.css";

const SideNavbar = () => {
  return (
    <nav>
      <div id="sidenav" className="d-none d-md-block">
        <a href="http://localhost:3000" id="instagram">
          <img
            src="images/instagram.png"
            alt="instagram"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
        <a href="http://localhost:3000" id="facebook">
          <img
            src="images/face-book.png"
            alt="facebook"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
        <a href="http://localhost:3000" id="twitter">
          <img
            src="images/twitter.png"
            alt="twitter"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
        <a href="http://localhost:3000/" id="youtube">
          <img
            src="images/youtube.png"
            alt="youtube"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      </div>
    </nav>
  );
};

export default SideNavbar;
