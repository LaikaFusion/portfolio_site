import React, { Component } from "react";
import MenuBar from "../MenuBar";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: []
    };
  }
  componentDidMount = () => {
    this.setState({ resume: JSON.parse(process.env.REACT_APP_RESUME) });
  };
  render() {
    const education = JSON.parse(process.env.REACT_APP_EDUCATION);
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About - Andrew McLaughlin</title>
          <link rel="canonical" href={`${process.env.URL}about`} />
        </Helmet>
        <MenuBar />
        <div className="aboutContainer">
          <Switch />
        </div>
      </div>
    );
  }
}

export default Blog;
