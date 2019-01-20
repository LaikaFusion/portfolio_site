import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import ResumeExpander from "./ResumeExpander";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume:[]
    };
  }
  componentDidMount = ()=>{
    this.setState({resume: JSON.parse(process.env.REACT_APP_RESUME)})
  }
  render() {
    const education = JSON.parse(process.env.REACT_APP_EDUCATION);
    return (
      <div>
        <MenuBar />
        <div className="aboutContainer">
          <div className="aboutTitle">About Me</div>
          <div className="infoRow">
            <div className="portrait" />
            <div className="contactBox">
              <div className="contactTitle"> Contact Info</div>
              <div className="contactList">
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <a href={`mailto:${process.env.REACT_APP_EMAIL1}`}>
                    {process.env.REACT_APP_EMAIL1}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <a  href={`mailto:${process.env.REACT_APP_EMAIL2}`}>
                    {process.env.REACT_APP_EMAIL2}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon flip ">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  {process.env.REACT_APP_PHONE}
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </div>
                  <a href={`https://${process.env.REACT_APP_GITHUB}`}>
                    {process.env.REACT_APP_GITHUB}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                  <a href={`https://www.${process.env.REACT_APP_LINKEDIN}`}>
                  {process.env.REACT_APP_LINKEDIN}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <a href={`https://www.${process.env.REACT_APP_INSTA}`}>
                  {process.env.REACT_APP_INSTA}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faComment} />
                  </div>
                  Discord, Slack, and PGP on request
                </div>
              </div>
            </div>
          </div>
          <div className="resumeSection">
            <div className="contactTitle"> Work History</div>
            {this.state.resume.map((e, i) => {
              return (
                <ResumeExpander
                  key={i}
                  company={e.company}
                  title={e.title}
                  duties={e.duties}
                  datesWorked={e.datesWorked}
                />
              );
            })}
          </div>
          <div className="educationRow">
            <div className="contactTitle">Education</div>
            <div className="eduListitem">
              <div className="listItem">{education[0].schoolName}</div>
              <div className="degree">{education[0].major}</div>
              <div className="edudate">{education[0].dates}</div>
            </div>
            <div className="eduListitem">
              <div className="listItem">{education[1].schoolName}</div>
              <div className="degree">
              {education[1].major} <br />
              {education[1].minor}
              </div>
              <div className="edudate">{education[1].dates}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
