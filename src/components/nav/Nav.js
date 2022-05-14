import React from "react";
import Drawer from "../material-ui/Drawer";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="menu">
        {" "}
        <Drawer />
      </div>

      <img
        className="nav-image"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
