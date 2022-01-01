import React from "react";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

const Socials = () => {
    return (
        <section id="socials" className="py-8">
            {/* <div className="flex justify-center content-center mb-8 ml-10 font-semibold leading-3 tracking-wide capitalize">
                <h1 className='text-2xl text-white font-semibold tracking-tight text-center capitalize social__header'>Join our Community</h1>
            </div> */}
            <h1 className="text-2xl text-white font-semibold tracking-tight text-center capitalize">Join our Community</h1>
            <h2 className="leading-8 text-center about__text lg:px-16">
                Join our ever growing commnuinty on Twitter, Discord and Telegram
            </h2>
            <div className="flex flex-row min-h-32 justify-center my-8">
                <IconContext.Provider value={{ size: '6em', style: { padding: "0.7em 0.7em 0.7em 0.6em", margin: "8px 22px 0 8px", border: "2px solid white", borderRadius: "30%", display: "flex", flexDirection: "row" } }} >
                    <a href="https://twitter.com/Duckiescoin" target="_blank" rel="noreferrer noopener" style={{ margin: "0 0 0 56px" }} >
                        <FaTwitter className="text-blue-500 hover:text-yellow-300 hover:bg-yellow-800 hover:border-slate-900 icon" />
                    </a>
                    <a href="https://t.me/duckiescoin" target="_blank" rel="noreferrer noopener">
                        <FaTelegram className="text-blue-500 hover:text-yellow-300 hover:bg-yellow-800 hover:border-slate-900 icon" />
                    </a>
                    <a href="https://www.discord.gg/YXVZ5q22Qw" target="_blank" rel="noreferrer noopener">
                        <FaDiscord className="text-blue-500 hover:text-yellow-300 hover:bg-yellow-800 hover:border-slate-900 icon" />
                    </a>

                </IconContext.Provider>
            </div>




        </section>
    )
}

export default Socials;