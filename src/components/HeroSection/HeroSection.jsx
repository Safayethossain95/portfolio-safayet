/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "react-bootstrap";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <div className="myContainermini">
          <Row className="herorow align-items-center">
            <Col lg={7}>
              <h1 className="headingtext">Safayet Hossain</h1>
              <p className=" bannermaintext">
                Hi! I'm a react developer
              </p>
              <div className="btncontortion">

              <button className="herobutton">Let's get started</button>
              </div>
            </Col>
            <Col lg={5}>
              <div className="circle">
                <img src="/assets/images/safayet.jpg" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
