import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import ExpCard from "./ExpCard";
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Development Engineer I",
            description: ["As a Full Stack Software Developer Contributing in Development and Maintenance of organization's Website, Admin and API's.","Worked on End-to-End Integration of Third party API's with Server / Client Side Request Completion.","Optimized Report generation time with 75 - 80% time reduced which resulted in resolving of request time out problem for Millions of records.","Migrated Multiple modules from Dot net Framework while developing CRUD API's which will support React teams in front- end."],
            company: "Eduvanz Finance",
            date: "November 2020 - present"
        }
    ]
    return (
        <div className="experience bg-dark" id="Experience">
            <div className="container">
                <br></br>
                <h1 className="text-start text-light sectiontopmargin">
                    Experience
                </h1>
                <br></br>
                <VerticalTimeline
                    animate={true}
                    layout={'1-column-left'}
                    lineColor={'black'}>
                    {experiences.map(experience => {
                        return <ExpCard
                            title={experience.title}
                            description={experience.description}
                            company={experience.company}
                            date={experience.date} />
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;