import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Mainmenu.css";

class Mainmenu extends Component {
  render() {
    return (
      <div className="positonDiv">
      <div className="fullContainer">
        <div className="leftLine" />
        <div className="menuContainer">
          <div className="title">{process.env.REACT_APP_REALNAME}</div>
          <Link to="/about">
            <div className="about menuItem">About</div>
          </Link>
          <Link to="/demos">
            <div className="demos menuItem">Demos</div>
          </Link>
          {/* <Link to="/blog">
            <div className="blog menuItem">Blog</div>
          </Link> */}
        </div>
        <div className="rightLine" />
      </div>
      </div>
    );
  }
}

export default Mainmenu;
