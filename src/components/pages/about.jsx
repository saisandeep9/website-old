import React from "react";
import Header from "../common/header";

const About = () => {
  const data = {
    title: "About",
    subText:
      "A About Profile landing page template freshly redesigned for Bootstrap",
  };

  return (
    <div style={{ minHeight: "700px", marginTop: "80px" }}>
      <Header data={data} />
    </div>
  );
};

export default About;
