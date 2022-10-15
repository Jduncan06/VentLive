import React from "react";
import {Button } from "reactstrap";
import fullLogo from "../app/assets/img/fullLogo.png";
import ventPromo from "../app/assets/ventPromo.mp4";

const Tagline = () => {
  return (
    <div className="tagLine">
      <video src={ventPromo} loop autoPlay muted className="videoBackground" />
      <img src={fullLogo} alt="logo" className="logo d-none d-md-block" />
<<<<<<< HEAD
      <h1 className="content">
          COMEDIANS
          <span className="unpack">UNPACK</span>
          <span className="gripes">YOUR GRIPES!</span>
=======
      <div className="contentContainer">
      <Col className="content">
        <h1 className="comedians">
          COMEDIANS<br/>
         
          <span className="unpack">UNPACK</span>
          
          <br />
          <span className="gripes">YOUR GRIPES!</span>
          <br />
          
>>>>>>> 9be311aabf107c944ec907defe7527209f77d991
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
<<<<<<< HEAD
        </h1>
=======
          </h1>
        </Col>
      </div>
>>>>>>> 9be311aabf107c944ec907defe7527209f77d991
      <hr />
    </div>
  );
};

export default Tagline;
