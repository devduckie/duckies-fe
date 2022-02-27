import React from "react";

const data = [
    {
        "label": "Market Liquidity",
        "value": 58
    },
    {
        "label": "Token Burn",
        "value": 20
    },
    {
        "label": "Community & Holders",
        "value": 10
    },
    {
        "label": "Marketing",
        "value": 5
    },
    {
        "label": "Team & Advisors",
        "value": 7
    }
]
const color = [
    "#003f5c",
    "#58508d",
    "#bc5090",
    "#ff6361",
    "#ffa600"
]

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="pt-32 px-32">
            <h3 className='text-2xl text-white font-semibold tracking-tight text-center capitalize mb-8'>
                Tokenomics
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-20">
                {Object.values(data).map((item,id) =>  {
                    return (
                        <div key={`${id}`} className="my-10 text-center">
                            <div>{item.label}</div>
                            <div>{item.value}%</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Tokenomics;