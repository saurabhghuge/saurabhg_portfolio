import React from "react";
import './FrontPage.css';
import { ReactComponent as CoderImg } from './images/coder.svg';

import { Button } from "react-bootstrap";

const FrontPage= ()=>{
    return (
        <div className="frontpage bg-dark">
            <section className="bg-dark text-center text-light p-5">
                <div className="container">
                    <div className="d-sm-flex">
                        <div className="text-start">
                            <h1>Hi, I am a <span className="text-warning">Software Engineer</span></h1>
                            <p className="text-center">
                                {/* <LocationOn />Based in Dallas, Texas. */}
                            </p>
                            <div className="mb-2">
                                <a href="https://github.com/saurabhghuge">
                                    <Button variant="primary" size="md">
                                        Know More!
                                    </Button>
                                </a>

                            </div>
                        </div>
                        <CoderImg className="img-fluid w-50" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FrontPage;