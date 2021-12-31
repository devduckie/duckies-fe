import React from "react";


const About = () => {
    return (
        <section id="about" className="About grid text-white px-16 py-4 sm:text-xs md:text-md lg:text-xl md:justify-center md:content-center" >
            <h1 className="text-2xl text-white font-semibold tracking-tight text-center capitalize">About</h1>
            <h2 className=" leading-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga facere nostrum optio sed aperiam maiores modi, repellat nemo inventore totam, libero magnam error accusamus minus est quas perferendis, veritatis nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nesciunt quidem. Sit consectetur ab ex nemo cupiditate aliquam in rerum! Veritatis maxime qui deserunt expedita vero, odit quae dolor consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur mollitia dolorem quibusdam, minus fuga id. Aperiam, dolore suscipit. Dicta magnam sunt, eveniet aliquid saepe adipisci dolores totam debitis illum nemo?
            </h2>

            <div className="my-8 md:content-center md:justify-center">
                <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x40eFd6C0EB234330e9eeeCBBa7FBc6EF85a03EA5" target="_blank" rel="noreferrer noopener">
                    <button className="text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mx-2 my-2">
                        Buy on Pancakeswap
                    </button>
                </a>
                <a href="https://bscscan.com/token/0x40efd6c0eb234330e9eeecbba7fbc6ef85a03ea5#tokenTrade" target="_blank" rel="noreferrer noopener">
                    <button className="text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mx-2 my-2">
                        View on BSCScan
                    </button>
                </a>
            </div>
        </section>
    );
}

export default About;
