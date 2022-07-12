import { VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const Project = ({ name, description, date }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element --work"
            contentStyle={{ background: 'rgb(22, 28, 45)', color: 'rgb(255, 255, 255)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
            // date={date}
            iconStyle={{ color: 'rgb(255, 255, 255)' }}
        >
            <h4 className="vertical-timeline-element-title">{name}</h4>
            <p>
                <ul>
                    {description.map(line => {
                        return <li>
                            {line}
                        </li>
                    })}
                </ul>
            </p>
        </VerticalTimelineElement>
    );
}

export default Project;