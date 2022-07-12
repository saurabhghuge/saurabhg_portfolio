import React from 'react';
import './Projects.css';
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "ExpenceManagement-app",
            description: ["https://expencemanagement-app.herokuapp.com/","Daily expence mangament dashboard with Advanced search and filters.","Help to Manage daily expenses of person digitally rather than than managing it traditionally on paper","Provide filters for effective search of expense","User can access it from any place and manage it","Authentication and Authorization is done by google Authentication service.","Database is Firebase Realtime database with user identity encryption.","Technologies used: React,Redux,JavaScript,Firebase."],
            date: "May 2021 - October 2021"
        },
        {
            id: 2,
            name: "city-weather",
            description: ["It is a Weather forecast app, Created in React js.","It satisfies all the conditions of PWA (Progressive Web Application)","Technologies used: React, Node.js, Netlify, Html, Css."],
            date: "February 2021 - March 2021"
        },
        {
            id: 3,
            name: "Automatic traffiffic control system",
            description: ["System for controlling the traffiffic signal with dynamic time allocation depending on the volume of the traffiffic in each lane unlike traditional system which works on fifixed time","Technologies used: Arduino , php , Mysql, HTML, CSS, apache server"],
            date: "July 2020 - August 2020"
        },
        {
            id: 4,
            name: "Drowsiness Detection For Drivers",
            description: ["Using Face Detection, We successfully detected is driver is asleep or awake while driving and alerting the driver about his/her drowsiness","It is an image processing application which captures images in succession and predict whether the driver is feeling drowsy or not and alert accordingly. ","Technologies used: Python"],
            date: "June 2020 - June 2020"
        }

    ]
    return (
        <div className='projects1' id = 'Projects'>
            <div className='container'>
            <br></br>
            <br></br>
                <h1 className="text-start text-dark">
                    Projects
                </h1>
                <br></br>
                <VerticalTimeline
                    animate={true}
                    layout={'1-column-left'}
                    lineColor={'black'}>
                    {projects.map(project => {
                        return <Project
                            name={project.name}
                            description={project.description}
                            date={project.date}
                            link = {project.link} />
                    })}
                </VerticalTimeline>
            </div>
            <br></br>
        </div>
    );
}

export default Projects;