import React from "react";

function NavBar() {
  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <a style={buttonStyle} href="/forum">
            Forum
          </a>
        </li>
        <li>
          <a style={buttonStyle} href="/news">
            News
          </a>
        </li>
        <li>
          <a style={buttonStyle} href="/login">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  letterSpacing: "1px",
  fontWeight: "700",
  textTransform: "uppercase",
  fontSize: "1.5em",
  position: "absolute",
  top: "7%",
  right: "5%",
  display: "flex",
  listStyle: "none",
};

const buttonStyle = {
  textDecoration: "none",
  background: "white",
  padding: "8px 15px",
  color: "#20782f",
  borderRadius: "15px",
  marginRight: "15px",
};
export default NavBar;
