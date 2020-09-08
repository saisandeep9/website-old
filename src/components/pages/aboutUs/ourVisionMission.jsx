import React from "react";
import Header from "../../common/header";

const OurVisionMission = () => {
  const data = {
    title: "Our Vision and mission",
    subText:
      "A Our Vision and mission landing page template freshly redesigned for Bootstrap",
  };

  return (
    <div style={{ minHeight: "700px ", marginTop: "80px" }}>
      <Header data={data} />
    </div>
  );
};

export default OurVisionMission;
