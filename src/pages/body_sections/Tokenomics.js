import React from "react";
import DonutChart from 'react-donut-chart';

const reactDonutChartHandleClick = (item, toggled) => {
    if (toggled) {
        console.log(item);
    }
};

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="flex justify-center content-center mx-auto bg-slate-400 chart w-11/12">
            <DonutChart
                className={"white"}
                data={[
                    {
                        "label": "Circulating Supply",
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
                ]}
                onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
                innerRadius={0.6}

            />
        </section>
    )
}

export default Tokenomics;