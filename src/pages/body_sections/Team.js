import React from "react";

const Team = () => {
    return (
        <section id="team" className="mt-32 ">
            <h1 className="text-5xl text-white font-semibold tracking-tight text-center uppercase">Team</h1>
            <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x">
                <li className="snap-center">
                    <div className="bg-white flex-shrink-0 max-w-[70vw] overflow-hidden rounded-3xl">

                        <div className=" inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                        <div class=" h-96 w-[768px] p-12 flex flex-col justify-between items-start">

                        </div>
                    </div>
                </li>
                <li className="snap-center">
                    <div className="bg-white flex-shrink-0 max-w-[70vw] overflow-hidden rounded-3xl">

                        <div className=" inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                        <div className=" h-96 w-[768px] p-12 flex flex-col justify-between items-start">

                        </div>
                    </div>
                </li>
                <li className="snap-center">
                    <div className="bg-white flex-shrink-0 max-w-[70vw] overflow-hidden rounded-3xl">

                        <div className=" inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                        <div className=" h-96 w-[768px] p-12 flex flex-col justify-between items-start">

                        </div>
                    </div>
                </li>
                <li className="snap-center">
                    <div className="bg-white flex-shrink-0 max-w-[70vw] overflow-hidden rounded-3xl">

                        <div className=" inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                        <div className=" h-96 w-[768px] p-12 flex flex-col justify-between items-start">

                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Team;