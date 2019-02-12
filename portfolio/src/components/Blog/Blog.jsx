import React, { Component } from "react";
import MenuBar from "../MenuBar";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";

class Blog extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog - Andrew McLaughlin</title>
          <link rel="canonical" href={`${process.env.URL}about`} />
        </Helmet>
        <MenuBar />
        <div className="aboutContainer">
          <Switch >
            <Route exact path="" component={PostList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Blog;
