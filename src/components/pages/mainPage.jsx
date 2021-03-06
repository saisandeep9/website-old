import React from "react";
import CardsMain from "../common/cardsmain";
import products from "../../data/products";

const MainPage = () => {
  return (
    <div
      className="row justify-content-center  "
      style={{
        // marginBottom: "80px",
        paddingBottom: "80px",
        paddingTop: "30px",
        // marginTop: "30px",
        backgroundColor: "white",
      }}
    >
      {products.products.map((p) => (
        <CardsMain data={p} key={p.title} />
      ))}
    </div>
  );
};

export default MainPage;
