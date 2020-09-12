import React from "react";
import Header from "../common/header";

const OurServices = () => {
  const data = {
    title: "Our Services",
    subText:
      "A Our Services Profile landing page template freshly redesigned for Bootstrap",
  };

  return (
    <div style={{ minHeight: "700px", marginTop: "80px" }}>
      <Header data={data} />
    </div>
  );
};

export default OurServices;
