import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chirag Singhal </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am a recent graduate from <span className="purple">Aligarh Muslim University </span> with a degree in engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
          </ul>

          <p style={{ color: "dodgerblue" }}>
            "The journey of thousand kilometers begins with a single step!"{" "}
          </p>
          <footer style={{color: "#0059b3", marginTop:"-15px",fontWeight:"bold"}} >-Chirag </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
