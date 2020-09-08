import React from "react";
import Header from "../../common/header";

const CompanyProfile = () => {
  const data = {
    title: "Company Profile",
    subText:
      "A Company Profile landing page template freshly redesigned for Bootstrap",
  };

  return (
    <div style={{ minHeight: "700px", marginTop: "80px" }}>
      <Header data={data} />
    </div>
  );
};

export default CompanyProfile;
