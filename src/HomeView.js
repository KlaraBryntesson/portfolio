import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import * as Icon from "react-bootstrap-icons";
import WorkList from "./WorkList";
import Login from "./LoginComponent";
import styled from "styled-components";
// import axios from "axios";

// const Skills = styled.div`
//   padding: 10px;
//   background-color: orange;
//   position: relative;
//   width: 100vw;
//   overflow-x: hidden;
//   height: 3rem;
// `;

function Home() {
  const [projects, setProjects] = useState(null),
    [misc, setMisc] = useState(null),
    [details, setDetails] = useState(null),
    [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    fetch("/klara.json")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result.work);
        setMisc(result.about.misc);
        setDetails(result.about.details);
      });
  }, []);

  function handleClick() {
    setShowLogin(!showLogin);
  }
  return (
    <main>
      <IntroDiv>
        {details !== null && (
          <img alt="Klara-home" src={details.image[0]}></img>
        )}
        <div>
          <h1>Hello!</h1>
          {misc !== null && (
            <p>{misc.bio}</p>
            //     {/* <Skills>
            //   <ul className="Home-skill-primary">
            //     {misc.skills.map((skill) => (
            //       <li className="Home-skill-item" key={skill}>
            //         {skill}
            //       </li>
            //     ))}
            //   </ul>
            //   <ul className="Home-skill-secondary">
            //     {misc.skills.map((skill) => (
            //       <li className="Home-skill-item" key={skill}>
            //         {skill}
            //       </li>
            //     ))}
            //   </ul>
            // </Skills> */}
          )}
        </div>
      </IntroDiv>
      <CategoryDiv>
        <h2>Work</h2>
        <div>
          <hr />
        </div>
      </CategoryDiv>
      {projects && <WorkList projects={projects} />}
      <CategoryDiv>
        <h2>Contact</h2>
        <div>
          <hr />
        </div>
      </CategoryDiv>
      <div>
        <button onClick={handleClick}>Admin login</button>
        {showLogin && <Login />}
      </div>
    </main>
  );
}

const IntroDiv = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-left: 20px;
  }

  p {
    width: 60%;
  }

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
`;

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 60px;

  div {
    width: 70%;
  }

  hr {
    margin-bottom: 25px;
    border: 1px solid black;
  }
`;

export default Home;
