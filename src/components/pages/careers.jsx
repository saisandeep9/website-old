import React, { useState } from "react";
import Header from "../common/header";
import { Button, Collapse } from "react-bootstrap";
import Card from "../common/card";
import careersdata from "../../data/careersData";

const Careers = () => {
  const [marketing, setmarketing] = useState(true);
  const [hR, sethR] = useState(false);
  const [technology, settechnology] = useState(false);
  const [products, setproducts] = useState(false);

  const data = {
    title: "Careers",
    subText: " A Road Map to Start your Career",
  };

  return (
    <div
      style={{
        minHeight: "700px",
        marginTop: "80px",
      }}
    >
      <Header data={data} />

      <section
        id="careers"
        style={{
          marginTop: "50px",
          width: "100%",
          background: "white ",
          paddingTop: "53px",
          paddingBottom: "60px",
        }}
      >
        <div
          className=" text-left  "
          // style={{ marginLeft: "40px" }}
        >
          <div className="row  ml-md-4 col-12 ">
            {/* <div className="col-12"> */}
            <ul
              className=" list-group list-group-flush   h4  col-md-11  ml-md-3 "
              style={{ cursor: "pointer" }}
            >
              <li
                className="list-group-item "
                style={{ background: "white " }}
                onClick={() => setmarketing(!marketing)}
                // aria-controls="example-collapse-text"
                aria-expanded={marketing}
              >
                {" "}
                {/* <a data-toggle="collapse" id="lists"> */}
                Marketing {/* </a> */}
              </li>
              <Collapse in={marketing}>
                <ul
                  className="list-inline "
                  // className="collapse lists"
                >
                  {careersdata.marketingdata.length === 0 ? (
                    <h1>At present vacancy </h1>
                  ) : (
                    careersdata.marketingdata.map((mrt) => (
                      <li className="list-inline-item" key={mrt.titel}>
                        <Card data={mrt} />
                      </li>
                    ))
                  )}
                </ul>
              </Collapse>
              <li
                className="list-group-item"
                onClick={() => sethR(!hR)}
                aria-controls="example-collapse-text"
                aria-expanded={hR}
              >
                Human Resources
              </li>
              <Collapse in={hR}>
                <ul className="  list-inline ">
                  {careersdata.humanResourcesdata.map((hr) => (
                    <li className="list-inline-item" key={hr.titel}>
                      <Card data={hr} />
                    </li>
                  ))}
                </ul>
              </Collapse>
              <li
                className="list-group-item"
                onClick={() => settechnology(!technology)}
                aria-controls="example-collapse-text"
                aria-expanded={technology}
              >
                Technology
              </li>
              <Collapse in={technology}>
                <ul className="  list-inline ">
                  {careersdata.technologydata.map((tech) => (
                    <li className="list-inline-item" key={tech.titel}>
                      <Card data={tech} />
                    </li>
                  ))}
                </ul>
              </Collapse>

              <li
                className="list-group-item"
                onClick={() => setproducts(!products)}
                aria-controls="example-collapse-text"
                aria-expanded={products}
              >
                Products
              </li>
              <Collapse in={products}>
                <ul className="  list-inline ">
                  {careersdata.productsdata.map((products) => (
                    <li className="list-inline-item" key={products.titel}>
                      <Card data={products} />
                    </li>
                  ))}
                </ul>
              </Collapse>
            </ul>

            {/* </div> */}
          </div>
        </div>

        {/* ............................................... */}
      </section>
    </div>
  );
};

export default Careers;
