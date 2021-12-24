import React from "react";
import Header from './Components/Header';
import About from './Components/About';
import Roadmap from './Components/Roadmap';
import Tokenomics from './Components/Tokenomics';
import FAQs from './Components/FAQs';
import Socials from './Components/Socials';
import Team from './Components/Team';


const App = () => {
    return (
        <div>

            <Header />
            <About />
            <Socials />
            <Roadmap />
            <Tokenomics />
            <FAQs />
            <Team />

        </div>
    )
}

export default App;