import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef, SiGmail } from "react-icons/si";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Ayushman Tamrakar, currently pursuing my B.Tech in <i><b className="purple">Mathematics and Data Science</b></i> at NIT Bhopal. Originating from Sagar, I have consistently excelled academically from an early age. In Class 10, I achieved <i><b className="purple">Rank 1</b></i> in the state board exams and was honored by the <i><b className="purple">Chief Minister</b></i> of Madhya Pradesh for this accomplishment. Throughout high school, I remained actively engaged in academic competitions, winning the <i><b className="purple">State Level Science Olympiad</b></i>.
              <br />
              <br />
              My journey into programming began in my 2nd year of college, and since then, I have maintained a strong track record on various coding platforms. I am proficient in:
              <i>
                <b className="purple"> C++, JavaScript, and the MERN Stack.</b>
              </i>
              <br />
              <br />
              As I continue my academic and professional journey, I plan to further explore the field of <i><b className="purple">data science</b></i>, combining my background in mathematics with cutting-edge technologies. My interests lie in building innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              &nbsp; and exploring the world of &nbsp;
              <i>
                <b className="purple">Algorithms</b>.
              </i>
              <br />
              <br />
              I am always eager to apply my skills in developing products using
              <i>
                <b className="purple"> Node.js</b>
              </i> and modern JavaScript frameworks like
              <i>
                <b className="purple"> React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <h2>
              Feel free to <span className="purple">connect </span>with me
            </h2>
            <ul className="home-about-social-links">


              <li className="social-icons">
                <a
                  href="https://leetcode.com/ayushman_tamrakar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/ayushmantamrakar1nitb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodeforces />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/ayushmanchef"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/ayushmantam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ayushman.tamrakar17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  {/* Replace this with an email icon from your preferred icon library */}
                  <SiGmail /> {/* Example using Gmail icon */}
                </a>
              </li>

              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayushmantamrakar17/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayushman_tamrakar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>


            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
