import React from "react";
import { FaBeer, } from 'react-icons/fa';
import { GiBurningEye, GiTeamIdea, GiMegaphone, GiDroplets } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

const data = [
    {
        "label": "Market Liquidity",
        "value": 58,
        "image": GiDroplets
    },
    {
        "label": "Token Burn",
        "value": 20,
        "image": GiBurningEye
    },
    {
        "label": "Community/Holders",
        "value": 10,
        "image": RiTeamFill
    },
    {
        "label": "Marketing",
        "value": 5,
        "image": GiMegaphone
    },
    {
        "label": "Team & Advisors",
        "value": 7,
        "image": GiTeamIdea
    }
]
console.log(data[0].image);

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="pt-32 px-32">
            <h3 className='text-2xl text-white font-semibold tracking-tight text-center capitalize mb-8'>
                Tokenomics
            </h3>
            <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-28 mx-4">
                {Object.values(data).map((item,id) =>  {
                    return (
                        <div key={`${id}`} className=" w-96 lg:w-96 flex flex-col flex-1 p-1 mx-2 my-4 lg:my-0 text-center items-end bg-gradient-to-r from-slate-700 to-slate-900 drop-shadow-2xl hover:drop-shadow-xl">
                            <div>{item.label}</div>
                            <div>{item.value}%</div>
                            <span className="relative right-3/4 bottom-6 lg:bottom-2 text-yellow-400">{<item.image style={{fontSize: "28px"}}/>}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Tokenomics;