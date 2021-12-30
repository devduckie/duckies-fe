import React from 'react';
import Accordion from '../../components/Accordion';
import { accordionData } from '../../utils/content';

const FAQs = () => {
    return (
        <section id="FAQs">
            <h1 className="text-2xl text-white font-semibold tracking-tight text-center capitalize">FAQs</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </section>
    );
};

export default FAQs;