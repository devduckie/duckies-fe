import React from "react";
import DonutChart from 'react-donut-chart';

const reactDonutChartHandleClick = (item, toggled) => {
    if (toggled) {
        console.log(item);
    }
};

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
        "label": "Community and Holders",
        "value": 10
    },
    {
        "label": "Marketing",
        "value": 5
    },
    {
        "label": "Team and Advisors",
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
        <section id="tokenomics" className="flex justify-center content-center text-center mx-auto chart">
            <DonutChart
                className={"white"}
                data={data}
                onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
                innerRadius={0.6}
                colors={color}
                height={550}
                width={550}
                legend={false}
                selectedOffset={0.04}
                strokeColor={"#fff"}


            />
        </section>
    )
}

export default Tokenomics;