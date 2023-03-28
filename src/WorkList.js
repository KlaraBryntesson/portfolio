import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

function WorkList(props) {
  console.log(props.projects);
  return (
    <Cards className="WorkList">
      {props.projects.map((project) => (
        <Link className="WorkList-card" to={project.id} key={project.id}>
          <Card image={project.image}>
            <div className="WorkList-container">
              <div>
                <h3>{project.name}</h3>
                <p>{project.shortdescription}</p>
              </div>
              {/* <div>
                {project.languages.map((language) => (
                  <span key={language}> {language} / </span>
                ))}
              </div> */}
            </div>
          </Card>
        </Link>
      ))}
    </Cards>
  );
}

WorkList.propTypes = {
  projects: PropTypes.array,
};

const Cards = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 300px;
  margin-right: 20px;

  .WorkList-container {
    visibility: hidden;
  }

  h3,
  p,
  span {
    visibility: hidden;
  }

  &:hover {
    .WorkList-container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      visibility: visible;
      width: 90%;
      height: 90%;
      margin: auto;
      background-color: rgba(247, 248, 242, 0.7);
      animation: backGround 0.5s linear;
    }

    h3,
    p,
    span {
      visibility: visible;
    }
  }

  @keyframes backGround {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  div {
    text-align: center;
  }
`;

export default WorkList;
