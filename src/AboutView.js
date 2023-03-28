import React from "react";
import { useEffect, useState } from "react";
// import * as Icon from "react-bootstrap-icons";
import moment from "moment";

function About() {
  const [misc, setMisc] = useState("");
  const [details, setDetails] = useState("");
  const [years, setYears] = useState("");

  useEffect(() => {
    fetch("/klara.json")
      .then((response) => response.json())
      .then((result) => {
        setMisc(result.about.misc);
        setDetails(result.about.details);
        console.log(result.about);
      });
  }, []);

  useEffect(() => {
    setYears(moment(details.age).diff(moment(), "years") * -1);
  }, [details]);

  return (
    <main>
      <h1>About</h1>
      {details !== "" && (
        <div>
          <h2>{details.name}</h2>
          {years !== "" && <p>{years} years</p>}
          <img alt="Klara" src={details.image[0]}></img>
          <ul>
            <li>{details.email}</li>
          </ul>
        </div>
      )}
      {misc !== "" && (
        <div>
          {misc.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </main>
  );
}

export default About;
