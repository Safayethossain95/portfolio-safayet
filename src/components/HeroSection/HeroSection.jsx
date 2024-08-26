import { Col, Row } from 'react-bootstrap'
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <div className="myContainermini">
          <Row className="herorow align-items-center">
            <Col lg={7}>
            <h1>Safayet Hossain</h1>
            </Col>
            <Col lg={5}>
            fullstack developer</Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
