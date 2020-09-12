import React, { useState } from "react";
import Header from "../common/header";
import { Button, Collapse } from "react-bootstrap";
import Card from "../common/card";
import careersdata from "../../data/careersData";

const Careers = () => {
  const [marketing, setmarketing] = useState(false);
  const [hR, sethR] = useState(false);
  const [technology, settechnology] = useState(false);
  const [products, setproducts] = useState(false);

  const data = {
    title: "Careers",
    subText: " A road map to start your Career",
  };

  return (
    <div style={{ minHeight: "700px", marginTop: "80px" }}>
      <Header data={data} />

      <section
        id="careers"
        style={{
          // minHeight: "600px",
          // marginTop: "60px",
          width: "100%",
          //   minBlockSize: "100% 400px",
          paddingTop: "53px",
          backgroundColor: "#ffff",
        }}
      >
        {/* list-unstyled  */}

        <div
          className=" text-left "
          // style={{ marginLeft: "40px" }}
        >
          <div className="row  ml-md-4 col-12">
            {/* <div className="col-12"> */}
            <ul
              className=" list-group list-group-flush h4  col-md-11  ml-md-3"
              style={{ cursor: "pointer" }}
            >
              <li
                className="list-group-item"
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
                  {careersdata.marketingdata.map((mrt) => (
                    <li className="list-inline-item">
                      <Card data={mrt} />
                    </li>
                  ))}
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
                    <li className="list-inline-item">
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
                    <li className="list-inline-item">
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
                    <li className="list-inline-item">
                      <Card data={products} />
                    </li>
                  ))}
                </ul>
              </Collapse>
              <li className="list-group-item"></li>
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
