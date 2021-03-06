import React from "react";


const About = () => {
    return (
        <section id="about" className="About grid text-white py-36 lg:px-32 md:px-16 sm:text-xs md:text-md lg:text-xl md:justify-center md:content-center" >
            <h1 className="text-2xl text-white font-semibold tracking-tight text-center capitalize">About</h1>
            <h2 className=" leading-8 text-center about__text lg:px-16 mb-16">
                Duckies is a community project built on the Binance Smart Chain (BSC) with $DUCKIE as its
                ecosystem token. We are a community driven project bringing the adoption of Duckies NFT integration and
                gamification on the platform (P2E)
            </h2>

            <div className="md:content-center md:justify-center lg:px-16 mx-auto my-8">
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x40eFd6C0EB234330e9eeeCBBa7FBc6EF85a03EA5" target="_blank" rel="noreferrer noopener">
                    <button className="text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full mx-2 my-2">
                        Buy on Pancakeswap
                    </button>
                </a>
                <a href="https://bscscan.com/token/0x40efd6c0eb234330e9eeecbba7fbc6ef85a03ea5#code" target="_blank" rel="noreferrer noopener">
                    <button className="text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full mx-2 my-2">
                        View on BSCScan
                    </button>
                </a>
                <a href="https://www.team.finance/view-coin/0x40eFd6C0EB234330e9eeeCBBa7FBc6EF85a03EA5?name=Duckies&symbol=DUCKIE" target="_blank" rel="noreferrer noopener">
                    <button className="text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full mx-2 my-2">
                        Verify LP Lock
                    </button>
                </a>
                <a href="https://www.dextools.io/app/bsc/pair-explorer/0x8dbc28ee8551320e1473d52b3cddbd79cf7f8370" target="_blank" rel="noreferrer noopener">
                    <button className="text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full mx-2 my-2">
                        View on DEXTools
                    </button>
                </a>
            </div>
        </section>
    );
}

export default About;
