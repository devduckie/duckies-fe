import React from 'react';
import "../../App.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import FAQs from '../../data/faqs.json';



export default function Example() {
    return (
        <section id="FAQs" className="py-32 px-32">
            <h3 className='text-2xl text-white font-semibold tracking-tight text-center capitalize mb-8'>
                FAQs
            </h3>
            <Accordion
                allowZeroExpanded={true}
                className="accordion"
            >
                {Object.values(FAQs).map(values => {
                    const { heading, content } = values;
                    return (
                        <AccordionItem className="accordion__item">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button">
                                    {heading}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="accordion__panel">
                                <p>
                                    {content}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </section>

    );
}