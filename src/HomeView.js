import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./LoginComponent";
// import axios from "axios";

function Home() {
  const [projects, setProjects] = useState(null);
  // [participants, setParticipants] = useState(null)

  useEffect(() => {
    fetch("/klara.json")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result.work);
      });
  }, []);
  return (
    projects && (
      <div>
        {projects.map((project) => (
          <Link to={project.id} key={project.id}>
            <h3>{project.name}</h3>
            <h4>Languages used</h4>
            {project.languages.map((language) => (
              <span key={language}> {language}, </span>
            ))}
            {project.participants !== "" && (
              <div>
                <h4>Participants</h4>
                {project.participants.map((participant) => (
                  <span key={participant}>{participant}, </span>
                ))}
              </div>
            )}
          </Link>
        ))}
        <Login />
      </div>
    )
  );
}

export default Home;
