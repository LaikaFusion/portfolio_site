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
import secret from '../secrets.js';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume:[]
    };
  }
  componentDidMount = ()=>{
    this.setState({resume: secret.resume})
  }
  render() {
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
                  <a href={`mailto:${secret.contactInfo.email1}`}>
                    {secret.contactInfo.email1}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <a  href={`mailto:${secret.contactInfo.email2}`}>
                    {secret.contactInfo.email2}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon flip ">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  {secret.contactInfo.phone}
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </div>
                  <a href={`https://${secret.contactInfo.github}`}>
                    {secret.contactInfo.github}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                  <a href={`https://www.${secret.contactInfo.linkedin}`}>
                  {secret.contactInfo.linkedin}
                  </a>
                </div>
                <div className="listItem">
                  <div className="listIcon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <a href={`https://www.${secret.contactInfo.insta}`}>
                  {secret.contactInfo.insta}
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
              <div className="listItem">{secret.education[0].schoolName}</div>
              <div className="degree">{secret.education[0].major}</div>
              <div className="edudate">{secret.education[0].dates}</div>
            </div>
            <div className="eduListitem">
              <div className="listItem">{secret.education[1].schoolName}</div>
              <div className="degree">
              {secret.education[1].major} <br />
              {secret.education[1].minor}
              </div>
              <div className="edudate">{secret.education[1].dates}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
