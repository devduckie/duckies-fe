import React from 'react';
import Accordion from './Accordion';
import { accordionData } from '../utils/content';

const FAQs = () => {
    return (
        <div>
            <h1 className="text-white content-center self-center font-semibold">FAQs</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default FAQs;