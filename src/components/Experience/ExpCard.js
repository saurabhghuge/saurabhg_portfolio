import { VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const ExpCard = ({title, company, description, date}) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element --work"
            contentStyle={{ background: 'rgb(255, 255, 255)', color: 'rgb(0,0,0)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            date={date}
            iconStyle={{ color: '#rgb(0,0,0)' }}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h5 className="vertical-timeline-element-subtitle">{company}</h5>
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

export default ExpCard;