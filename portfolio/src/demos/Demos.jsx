import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Demos.css";
import "./CRTeffect.css";
import MenuBar from "../components/MenuBar";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demos: [
        {
          name: "Stock Trainer [React, Semantic-UI, Django, PostgreSQL]",
          link: "https://stock-trainer.netlify.com/",
          external: true
        },
        {
          name: "Text Constructor [React, Semantic-UI]",
          link: "https://textconstructor.y42.xyz/",
          external: true
        },
        {
          name: "Game of Life [React, Canvas]",
          link: "https://gameoflife.y42.xyz/",
          external: true
        },
        {
          name: "2048 Symbol Typing Trainer [Vue.js]",
          link: "http://2048.y42.xyz/",
          external: true
        },
        {
          name: "What is the Color of the Sky [React, Express, PostgreSQL]",
          link: "http://whatisthecolorofthesky.y42.xyz/",
          external: true
        },
        {
          name: "Snakes on a React [React]",
          link: "/snakes",
          external: false
        },
        {
          name: "Ultimate Tic Tac Toe [React]",
          link: "/UTTT",
          external: false
        },
        {
          name: "Debug Chopper [VSCode Extension]",
          link:
            "https://marketplace.visualstudio.com/items?itemName=laikaf.debugchopper",
          external: true
        },
        {
          name: "License Plate Game [CSS,JS,HTML]",
          link: "https://laikafusion.github.io/License-Plate-Game/",
          external: true
        }
      ],
      demosInput: ""
    };
  }
  handleKeypress = e => {
    switch (e.key) {
      case "Enter":
        let inputNum = parseInt(this.state.demosInput, 10);
        if (inputNum <= this.state.demos.length && inputNum > 0) {
          window.location = this.state.demos[inputNum -1 ].link;
        } else {
          this.setState(
            {
              demosInput: "Invalid Input"
            },
            () => {
              setTimeout(() => {
                this.setState({
                  demosInput: ""
                });
              }, 1000);
            }
          );
        }
        break;
      case "Backspace":
        this.setState(prevState => {
          return { demosInput: prevState.demosInput.slice(0, -1) };
        });
        break;
      default:
      if (/^[ -~]$/.test(e.key)) {
        this.setState(prevState => {
          if (e.code === "Space") {
            return { demosInput: prevState.demosInput.concat("\xa0") };
          }
          return { demosInput: prevState.demosInput.concat(e.key) };
        });
      }
        break;
    }
  };
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeypress);
  };
  render() {
    return (
      <div className="crt demosBackground">
        <MenuBar />
        <div className="demoContainer">
          <div className="demoSelectTitle">Select A Program</div>
          <div className="demolist">
            {this.state.demos.map((e, i) => {
              if (e.external) {
                return (
                  <a key={i} className="linkDemo" href={e.link}>
                    <div className="demoItem">{`${i + 1}. ${e.name}`}</div>
                  </a>
                );
              } else {
                return (
                  <Link key={i} className="linkDemo" to={e.link}>
                    <div className="demoItem">{`${i + 1}. ${e.name}`}</div>
                  </Link>
                );
              }
            })}
          </div>
          <div className="inputProgram">
            <div className="pcname ">user@demos:</div>
            <div className="inputBoxDemos">
              <span className="">{this.state.demosInput}</span>
              <span className="cursor">&#x25AE;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
