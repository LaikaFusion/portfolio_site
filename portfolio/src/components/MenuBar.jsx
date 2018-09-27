import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./MenuBar.css";
import "./MenuBarCRT.css";

class MenuBar extends Component {
  render() {
    return (
      <div
        className={
          this.props.location.pathname === "/demos"
            ? "menubarContainer menubarContainerCRT"
            : "menubarContainer"
        }
      >
        <NavLink activeClassName="selected" exact to="/">
          <div
            className={
              this.props.location.pathname === "/demos"
                ? "menuButton menuButtonCRT"
                : "menuButton"
            }
          >
            Home
          </div>
        </NavLink>
        <NavLink activeClassName="selected" to="/about">
          <div className={
              this.props.location.pathname === "/demos"
                ? "menuButton menuButtonCRT"
                : "menuButton"
            }>About</div>
        </NavLink>
        <NavLink activeClassName=""  to="/demos">
          <div className={
              this.props.location.pathname === "/demos"
                ? "menuButton menuButtonCRT crtselect"
                : "menuButton"
            }>Demos</div>
        </NavLink>
        <NavLink to="/blog">
          <div className={
              this.props.location.pathname === "/demos"
                ? "menuButton menuButtonCRT"
                : "menuButton"
            }>Blog</div>
        </NavLink>
      </div>
    );
  }
}

export default withRouter(MenuBar);
