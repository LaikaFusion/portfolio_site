// libs
import React, { Component } from "react";
import Mainmenu from "./components/Mainmenu";
import { Route, Switch } from "react-router-dom";
import FourohFour from "./components/FourohFour";
import About from "./components/About";
import Demos from "./demos/Demos";
import Snake from "./demos/democode/Snakes-OnA-React/snake/src/Snake";
import UTTT from "./demos/democode/Ultimate-Tic-TacToe/ultimate-tic-tac-toe/src/UTTT";

//css
import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/UTTT" component={UTTT} />
        <Route exact path="/snakes" component={Snake} />
          <Route exact path="/demos" component={Demos} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Mainmenu} />
          <Route component={FourohFour} />
        </Switch>
      </div>
    );
  }
}

export default App;
