import React from "react";
import { FaTwitter, FaTelegram, FaDiscord, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Socials = () => {
    return (
        <section id="socials" className="bg-white flex h-32 justify-start content-center">
            <IconContext.Provider value={{ size: '5em', style: { color: "#216aca", padding: "0.7em 0.7em 0.7em 0.7em", margin: "8px 0 0 0", } }}>
                <a href="https://twitter.com/Duckiescoin" target="_blank" rel="noreferrer noopener" style={{ margin: "0 0 0 48px" }}>
                    <FaTwitter />
                </a>
                <a href="https://t.me/duckiescoin" target="_blank" rel="noreferrer noopener">
                    <FaTelegram />
                </a>
                <a href="https://www.discord.gg/YXVZ5q22Qw" target="_blank" rel="noreferrer noopener">
                    <FaDiscord />
                </a>
                <a href="https://instagram.com/duckiescoin" target="_blank" rel="noreferrer noopener">
                    <FaInstagram />
                </a>
            </IconContext.Provider>


        </section>
    )
}

export default Socials;