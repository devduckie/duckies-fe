import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import roadmap from '../../data/roadmap.json';

const Roadmap = () => {
    return (
        <section id="roadmap">
            <VerticalTimeline
                animate={true}
            >
                {Object.values(roadmap).map(values => {
                    const { title, subtitle, content, status, date } = values;
                    const bgColor = status == "done" ? "#019454" : status == "ongoing" ? "#0048c4" : "#9e9900";
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: bgColor, color: '#fff' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${bgColor}` }}
                            date={date}
                            iconStyle={{ background: bgColor, color: '#fff' }}
                        >
                            {title && (<h3 className="vertical-timeline-element-title text-lg font-bold">{title}</h3>)}
                            {subtitle && (<h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>)}
                            {content && (<p>{content}</p>)}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}
export default Roadmap;
