import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./MenuBar.css";
import "./MenuBarCRT.css";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  toggleOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    };
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    };
    
    updateWindowDimensions= ()=>  {
      if(window.innerWidth < 700){
        this.setState({ open: false });
      }
      else{
        this.setState({open:true});
      }
      
    };
  
  render() {
    return (
      <div
        className={
          this.props.location.pathname === "/demos/"
            ? "menubarContainer menubarContainerCRT"
            : "menubarContainer"
        }
      >
        {this.state.open ? (
          <div className="toplist">
            <NavLink activeClassName="selected" exact to="/">
              <div
                className={
                  this.props.location.pathname === "/demos/"
                    ? "menuButton menuButtonCRT"
                    : "menuButton"
                }
              >
                Home
              </div>
            </NavLink>
            <NavLink activeClassName="selected" to="/about/">
              <div
                className={
                  this.props.location.pathname === "/demos/"
                    ? "menuButton menuButtonCRT"
                    : "menuButton"
                }
              >
                About
              </div>
            </NavLink>
            <NavLink activeClassName="" to="/demos/">
              <div
                className={
                  this.props.location.pathname === "/demos/"
                    ? "menuButton menuButtonCRT crtselect"
                    : "menuButton"
                }
              >
                Demos
              </div>
            </NavLink>
            <NavLink  activeClassName="selected" to="/blog/">
              <div
                className={
                  this.props.location.pathname === "/demos/"
                    ? "menuButton menuButtonCRT"
                    : "menuButton"
                }
              >
                Blog
              </div>
            </NavLink>
          </div>
        ) : null}
        <div className="menuArrowContainer"><div
          onClick={this.toggleOpen}
          className={
            this.props.location.pathname === "/demos"
              ? "menuButton menuButtonCRT openarrow"
              : "menuButton openarrow"
          }
        >
          Menu
          <span
            className={
              this.state.open
                ? "menuArrow rotated openarrow"
                : " counterrotated menuArrow openarrow"
            }
          >
            ▼
          </span>
        </div></div>
        
      </div>
    );
  }
}

export default withRouter(MenuBar);
