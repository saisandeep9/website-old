import React from "react";
import Header from "../common/header";
import { Helmet } from "react-helmet";
import MetaTags from "react-meta-tags";

const About = () => {
  const data = {
    title: "About",
    subText: "Let Us Inspire You With Our Story! ",
  };

  const header = [
    {
      name: "keywords",
      content:
        "My taxi cab, indian taxi, Onepage, Html, Business, Blog, Parallax",
    },
  ];

  console.log(header.map((h) => h.name));
  return (
    <div className="wrapper">
      {/* <Helmet>
        <meta name="description" content="about" />
        <meta
          name={header.name}
          content="My taxi cab, indian taxi, Onepage, Html, Business, Blog, Parallax"
        />
        <title>about</title>
      </Helmet> */}
      {/* <MetaTags>
        <title>Page 1</title>
        <meta
          id="meta-description"
          name="description"
          content="Some description."
        />
        <meta id="og-title" property="og:title" content="MyApp" />
        <meta id="og-image" property="og:image" content="path/to/image.jpg" />
      </MetaTags> */}

      <div style={{ minHeight: "700px", marginTop: "80px" }}>
        <Header data={data} />

        <div
          className="container about"
          style={{ marginTop: "90px", marginBottom: "150px" }}
        >
          {" "}
          <h3> Our Brand Story</h3>
          <div className="title-line-contact "></div>
          <p>
            RST Booking Ltd was incorporated in January 2019 as a Private
            Limited Company with HeadQuarters set in Bangalore, India. Mr
            Raghavendra, the mastermind behind the incorporation of the company
            has 14 years of experience in the travel industry. He had his own
            travel agency by the name "Rs Travels" in Bangalore which made him
            well acquainted with the industry and its diverse requirements.
          </p>
          <p>
            Mr.Raghavendra with his in-depth knowledge of the travel industry's
            business model and his good network with the all Indian Driver’s
            Association & unions made him aware of the issues faced by drivers
            working with MNC's like Ola Cabs and Uber.{" "}
          </p>
          <p>
            He did an analysis on the various changes and challenges in the
            travel industry and built smart mobility solutions to tackle the
            issues faced by both drivers and customers alike.
          </p>{" "}
          <p>
            After years of careful research, involvement and interactions, the
            organization has released “facilitator application”. This
            application provides the best platform for drivers to become
            empowered entrepreneurs and the customers to opt- in for a Local
            solution aiming at making India Vocal. RST Booking Private Ltd
            developed two applications ‘ Indian Taxis and My Taxi Cab’ to
            provide an intuitive taxi application with the latest technology and
            ensure that it is accessible to millions of drivers and commuters
            alike.
          </p>
          <div style={{ marginTop: "50px", marginBottom: "90px" }}>
            <h3>About the Founders</h3>
            <div className="title-line-contact "></div>
            <div
              className="media p-3"
              style={{
                background:
                  "linear-gradient(to right, #495bef 30%, var(--rstlog-color))",
              }}
            >
              <img
                className="align-self-center mr-3"
                src="1.jpg"
                alt=""
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <p className="ml-5 text-light">
                RST Booking Private Limited was founded and established by
                Mr.Raghavendra, and Mrs. Kavitha with an aim to provide
                moblitity for billions of Indians. Mr.Raghavendra has 14 years
                of rich experience in the travel business. Earlier in 2014 he
                upgraded his travel agency "RS Travels" to a proprietary concern
                and started rendering cab services to various IT & BT industries
                and also to the general public. He now owns a fleet of cabs to
                render a promising future to drivers and uninterrupted services
                to customers.
              </p>
            </div>
          </div>
          <h3>Vision and Mission</h3>
          <div className="title-line-contact "></div>
          <p>
            We aim to provide smart mobility solutions and address the various
            problems faced by drivers and customers.
          </p>
          <p>
            Our vision is to assist drivers to become empowered entrepreneurs
            and earn higher and also to provide quick, hassle free and reliable
            taxi services to our customers .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
