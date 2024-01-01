import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import "../styles/Home.css";
//import GithubIcon from "@material-ui/icons/Github"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi My Name is Vishesh Chandra</h2>
        <div className="prompt">
          <p>Frontend Developer with a passion of creating Scalable Web Applications.</p>
          <Link to="https://www.google.com"><InstagramIcon /></Link>
          <FacebookIcon />
          <Link to="https://www.linkedin.com/in/vishesh-chandra-4533b317b"><LinkedInIcon /></Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, Javascript, ReactJS, Bootstrap, TailwindCSS, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, C++,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
