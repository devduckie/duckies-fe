import React from "react";
import { FaTwitter, FaTelegram, FaDiscord, } from "react-icons/fa";
import { IconContext } from "react-icons";

const Socials = () => {
    return (
        <div className="bg-white flex h-32 justify-start content-center">
            <IconContext.Provider value={{ size: '6em', style: { color: "#216aca", border: "2px solid #216aaa", borderRadius: '30%', padding: "0.7em 0.7em 0.7em 0.7em", margin: "4px 0px 4px 64px", } }}>
                <a href="https://twitter.com/Duckiescoin" target="_blank">
                    <FaTwitter />
                </a>
                <a href="https://t.me/duckiescoin" target="_blank">
                    <FaTelegram />
                </a>
                <a href="https://www.discord.gg/YXVZ5q22Qw" target="_blank">
                    <FaDiscord />
                </a>
            </IconContext.Provider>


        </div >
    )
}

export default Socials;