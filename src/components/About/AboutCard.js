import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayushman Tamrakar </span>
            from <span className="purple"> Bhopal, India.</span>
            <br />
            I am currently pursuing a B.Tech in Mathematics and Data Science from NIT Bhopal, and I am in my 3rd year.
            <br />

            <br />
            <br />

          </p>

          <p>⚡ I have studied core software engineering subjects like Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, etc.</p>
          <p>⚡ In competitive programming, I have achieved a max rating of 1406 on Codeforces <span className="purple">(Specialist)</span> and a max rating of 1630 on CodeChef (3 Star). I have solved over 380 problems on Codeforces and more than 560 problems on LeetCode, with a max rating of 1718.</p>
          <p>⚡ Some of my notable achievements include securing Global Rank 437 in CodeChef Starters Div3 and 318 in CodeChef Starters Div4.</p>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
