// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 ,
//                   color: "#fff",
//                   zIndex: "3",
//                   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
//               }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> Chirag Singhal</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-content" style={{ position: "relative", zIndex: 2 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{
                  paddingBottom: 15,
                  color: "#fff", // Ensure text color is white for contrast
                  zIndex: 3,
                }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1
                className="heading-name"
                style={{
                  color: "#fff", // White color for better contrast with dark background
                  fontWeight: "bold",
                }}
              >
                I'M
                <strong className="main-name"> Chirag Singhal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
