import React from 'react';

import About from '../pages/body_sections/About';
import Roadmap from '../pages/body_sections/Roadmap';
import Tokenomics from '../pages/body_sections/Tokenomics';
import FAQs from '../pages/body_sections/FAQs';
import Socials from '../pages/body_sections/Socials';
import Partners from '../pages/body_sections/Partners';




const Body = ({ style }) => {

    return (
        <div >
            <About />
            <Roadmap />
            <Tokenomics />
            <FAQs />
            <Partners />
            <Socials />

            {/* <Contact /> */}
        </div>
    );
}

export default Body;