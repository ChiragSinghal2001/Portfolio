import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px",
      zIndex: 3,
    color: "#fff", // Ensure text color is visible
    position: "relative"
     }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ChiragSinghal2001"
        blockSize={15}
        blockMargin={5}
        color="dodgerblue"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
