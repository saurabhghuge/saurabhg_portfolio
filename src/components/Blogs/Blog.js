import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Button } from "react-bootstrap";

const Blog = ({ blogName, description, date, link }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element --work"
            contentStyle={{ background: 'rgb(22, 28, 45)', color: 'rgb(255, 255, 255)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
            date={date}
            iconStyle={{ color: 'rgb(255, 255, 255)' }}
        >
            <h4 className="vertical-timeline-element-title">{blogName}</h4>
            <p>
                {description}
                <br></br>
                <br></br>
                <a href= {link}>
                    <Button variant="primary" size="sm">
                        Go to Blog
                    </Button>
                </a>
            </p>

        </VerticalTimelineElement>
    );
}

export default Blog;
