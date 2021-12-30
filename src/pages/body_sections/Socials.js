import React from "react";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

const Socials = () => {
    return (
        <section id="socials">
            <div className="flex justify-center content-center mb-8 ml-8 font-semibold leading-3 tracking-wide capitalize">
                <h3>Join our Community</h3>
            </div>
            <div className="flex flex-row h-32 justify-center mb-8">
                <IconContext.Provider value={{ size: '6em', style: { padding: "0.7em 0.7em 0.7em 0.6em", margin: "8px 22px 0 8px", border: "2px solid white", borderRadius: "30%", display: "flex", flexDirection: "row", resize: "both" } }} >
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