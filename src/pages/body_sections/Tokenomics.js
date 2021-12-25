import React from "react";
import Token from "../../assets/Tokenomics.png";

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="justify-center content-center">
            <img src={Token} alt="Tokenomics" className=" w-full h-3/4 object-cover md:h-3/4 md:w-full" />
        </section>
    )
}

export default Tokenomics;