import React from "react";
import {Button } from "reactstrap";
import fullLogo from "../app/assets/img/fullLogo.png";
import ventPromo from "../app/assets/ventPromo.mp4";

const Tagline = () => {
  return (
    <div className="tagLine">
      <video src={ventPromo} loop autoPlay muted className="videoBackground" />
      <img src={fullLogo} alt="logo" className="logo d-none d-md-block" />
      <h1 className="content">
          COMEDIANS
          <span className="unpack">UNPACK</span>
          <span className="gripes">YOUR GRIPES!</span>
          <a href="/#Shows">
            <Button
              className="button btn"
              style={{
                backgroundColor: "#F16A74",
                border: "solid 1px #F16A74",
              }}
            >
              Get Tickets!
            </Button>
          </a>
        </h1>
      <hr />
    </div>
  );
};

export default Tagline;
