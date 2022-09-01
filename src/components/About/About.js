import { Container, Col, Row } from 'react-bootstrap';
import Saurabh from "../About/Saurabh.jpeg";
import './About.css'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const styles = {
    introTextContainer: {
      margin: 10,
      flexDirection: 'column',
      whiteSpace: 'pre-wrap',
      textAlign: 'left',
      fontSize: '1.2em',
      fontWeight: 500,

    },
    introImageContainer: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
  };



const About = () => {
    return (
        <>
            <div className="frontpage  bg-dark " style={{ height: "100%" }} id="About">
                <Container className="" >
                    <Row>
                        <Col style={styles.introTextContainer} >
                            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "#ffffff"}}>
                            Know Who <strong className="purple">I'M</strong>
                            </h1>
                            <Card className="quote-card-view">
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p style={{ textAlign: "justify" }}>
                                        Hi Everyone, I am <span className="purple">Saurabh Ghuge </span>
                                        <br/>
                                        from <span className="purple"> Mumbai, India.</span>
                                        <br/>Confident and motivated young individual with a highly adaptive and ambitious attitude. 
                                        <br />Eager to be challenged.<br/>Passionate about every advancement in IT and always curious to know and learn about the latest tools and technologies related to the field.
                                        <br/>
                                        <br/>
                                        Apart from coding, some other activities that I love to do!
                                    </p>
                                    <ul>
                                        <li className="about-activity">
                                        <ImPointRight /> Playing FIFA
                                        </li>
                                        <li className="about-activity">
                                        <ImPointRight /> Reading History
                                        </li>
                                        <li className="about-activity">
                                        <ImPointRight /> Writting Tech Blogs 
                                        </li>
                                    </ul>

                                    {/* <p style={{ color: "rgb(155 126 172)" }}>
                                        "Strive to build things that make a difference!"{" "}
                                    </p>
                                    <footer className="blockquote-footer"></footer> */}
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={styles.introImageContainer}>
                            {/* <img   style={{alignSelf: 'center',height: 400  ,width: 350,borderWidth: 1,borderRadius: 50}} src = {Saurabh} alt="profile" /> */}
                            <img   style={{alignSelf: 'center',height: 400  ,width: 400,borderWidth: 1,borderRadius: 200}} src = {Saurabh} alt="profile" />
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </>
    );
}


export default About;
