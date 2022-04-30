import {Container, Row, Col, Card } from 'react-bootstrap';
import './about.css';

const About = () => {
    return (
      <Container mb="3">
        <Row>
          <Col>
            <h2 className='about-title'>About</h2>
            <div className="about-intro">
              I am  <br />
              <span className="name-style">Tharik Uthuman</span> <br />
              stepping into Software developing envoirnment very first time.
            </div>
            <div className="download">
            <a href="https://drive.google.com/file/d/1_Dq2hmO2R3m6-GzsVbcleR_Wbf4zamoG/view?usp=sharing">
              <img src="https://img.icons8.com/fluency/48/000000/download.png"  alt=''/>
              My Resume
            </a>

            
          </div>
          </Col>
          <Col>
            <Card style={{ width: "18 rem" }} className="card">
              <Card.Img  src={require("../../../assets/tharik.png") } className="picture" width="200" height="300"/>
              
            </Card>
            
          </Col>
        </Row>
      </Container>
      
    );
}
export default About;