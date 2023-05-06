import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  return (
    <div style={container}>
      <div style={pill}></div>
      <p style={position}>
        <FontAwesomeIcon
          icon={faImages}
          size="xl"
          style={{ marginRight: "15px" }}
        />
        Gallery
      </p>
    </div>
  );
}

const position = {
  position: "absolute",
  top: "47px",
  left: "80px",
};

const container = {
  backgroundColor: "#035F48",
  width: "30%",
  height: "38%",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  position: "absolute",
  left: "68%",
  top: "18%",
  borderRadius: "8px",
};

const pill = {
  backgroundColor: "#72A599",
  width: "15px",
  height: "40px",
  borderRadius: "20px",
  position: "absolute",
  top: "40px",
  left: "50px",
};

export default Gallery;
