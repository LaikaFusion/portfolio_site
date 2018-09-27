import React, { Component } from "react";
import { Collapse } from "react-collapse";
import './ResumeExpander.css'
class ResumeExpander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggleOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    return (
      <div className='resumeExpander'>
        <div onClick={this.toggleOpen} className="workTitle">
          {this.props.company}
          <span className={this.state.open? "dropArrow rotated":" counterrotated dropArrow"}>▼</span>
        </div>
        <Collapse isOpened={this.state.open}>
        <div className="collaspesContents"> <div className="quarterBox">
            <div className="resumeTitle">
            Title:</div>
            <div className="positionContent">{this.props.title}</div>
            <div className="resumeTitle">
            Dates Worked:</div>
            <div className="datesWorked">{this.props.datesWorked}</div>
          </div>
          <div className="halfBox">
            <div className="duties">
            <div className="resumeTitle">
            Duties:</div>
              <div>
                {this.props.duties.map((e, i) => {
                  return <div key={i}>{e}</div>;
                })}
              </div>
            </div>
          </div></div>
        </Collapse>
      </div>
    );
  }
}

export default ResumeExpander;
