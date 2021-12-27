import React from 'react';

import About from '../pages/body_sections/About';
import Roadmap from '../pages/body_sections/Roadmap';
import Tokenomics from '../pages/body_sections/Tokenomics';
import FAQs from '../pages/body_sections/FAQs';
import Socials from '../pages/body_sections/Socials';
import Team from '../pages/body_sections/Team';



const Body = ({ style }) => {

    return (
        <div >
            <About />
            <Socials />
            <Roadmap />
            <Tokenomics />
            <FAQs />
            <Team />
        </div>
    );
}

export default Body;