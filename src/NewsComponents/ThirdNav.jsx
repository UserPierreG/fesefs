import React from "react";
import smalllogo from "../../assets/smalllogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

function ThirdNav() {
  return (
    <div style={container}>
      <a href="/">
        <img src={smalllogo} alt="smalllogo" style={logo} />
      </a>
      <p style={position}>
        {" "}
        <FontAwesomeIcon
          icon={faNewspaper}
          style={{ color: "white" }}
        /> News{" "}
      </p>
    </div>
  );
}

const container = {
  backgroundColor: "#035F48",
  width: "100vw",
  height: "13vh",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "34px",
  position: "absolute",
  left: "0%",
  top: "0%",
};

const logo = {
  maxWidth: "250px",
  position: "absolute",
  top: "-32%",
  left: "3%",
};

const position = {
  position: "absolute",
  top: "26%",
  left: "25%",
  fontWeight: "bold",
};

export default ThirdNav;
