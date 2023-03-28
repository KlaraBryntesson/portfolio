import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Work() {
  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  useEffect(() => {
    fetch("/klara.json")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result.work);
        console.log(result.work);
      });
  }, []);

  console.log("Projects:", projects);

  useEffect(() => {
    if (projects !== null) {
      setProject(projects.find((project) => project.id === projectId));
    }
  }, [projects, projectId]);

  // function findProject(project) {
  //   return project.id === projectId;
  // }

  // setProject(projects.find((project) => findProject(project)));
  // setProject(projects.find(project => projectId))
  // for (let x = 0; x < projects.length; x++) {
  //   if (projects[x].id.includes(projectId)) {
  //     setProject(projects[x]);
  //     console.log(project);
  //   }
  // }
  // return <p>{JSON.stringify(project)}</p>;
  return (
    <main>
      {project !== null && (
        <div>
          <h1>{project.name}</h1>
          <ul>
            {project.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <p>{project.description}</p>
          {project.participants !== "" && (
            <ul>
              {project.participants.map((participant) => (
                <span key={participant}>{participant}, </span>
              ))}
            </ul>
          )}
        </div>
      )}
    </main>
  );
}

export default Work;
