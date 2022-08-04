import React from "react";
import './FrontPage.css';
import CoderImg  from './images/Saurabh.jpeg';
import Typewriter from 'typewriter-effect';
import { Button } from "react-bootstrap";
import {AiOutlineArrowDown} from "react-icons/ai";

const styles = {
    nameStyle: {
      fontSize: '5em',

    },
    inlineChild: {
      display: 'inline-block',
    //   fontSize: '0.5em',

    },
    mainContainer: {
    //   margin: '50px,0px,0px,0px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  };
const data = {
    "name": "Saurabh Ghuge",
    "roles": ["a Software Engineer", "a Full-Stack Developer", "a Freelancer"]};

const FrontPage= ()=>{
    return (
        <div className="frontpage bg-dark  " id = 'Home'>
            <div className="homepage">
                <section className="bg-dark text-center text-light p-5  ">
                    <div className="container">
                    {/* <div className="d-sm-flex"> */}
                            <div className="text-start">
                                {/* <h1>Hi, I am a <span className="text-warning">Software Engineer</span></h1> */}
                                {/* <p className="text-center"> */}
                                {/* </p> */}
                                {/* <div className="mb-2">
                                    <a href="https://github.com/saurabhghuge">
                                        <Button variant="primary" size="md">
                                            Know More!
                                        </Button>
                                    </a>

                                </div> */}

                                {/* <Fade> */}
                                    <div style={styles.mainContainer}>
                                        <h1 style={styles.nameStyle}>{data?.name}</h1>
                                        <div style={{ flexDirection: 'row' }}>
                                            <div style={styles.inlineChild}>
                                                <h2 >I&apos;m&nbsp;</h2>
                                            </div>
                                            <div style={styles.inlineChild}>
                                                <Typewriter
                                                    options={{
                                                    loop: true,
                                                    autoStart: true,
                                                    strings: data?.roles,
                                                    }}
                                                />
                                            </div>
                                        </div>
                    
                                        <div className="scrollDownBox" >

                                            <a href="#About">

                                                <Button variant="primary" size="md">

                                                    Scroll Down &nbsp;

                                                    <AiOutlineArrowDown style={{ marginBottom: "2px" }} />

                                                </Button>
                                            </a>
                                        </div>
                                        {/* <Social /> */}
                                    </div>
                                    {/* </Fade> */}
                            </div>
                            {/* <CoderImg className="img-fluid w-50" /> */}
                        </div>
                    {/* </div> */}
                </section>
            </div>
        </div>
        
    )
}

export default FrontPage;