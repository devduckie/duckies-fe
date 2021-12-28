import React from "react";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

const Socials = () => {
    return (
        <section id="socials" className="flex h-32 justify-start content-center">
            <IconContext.Provider value={{ size: '5em', style: { padding: "0.7em 0.7em 0.7em 0.7em", margin: "8px 0 0 0", } }} className="icons">
                <a href="https://twitter.com/Duckiescoin" target="_blank" rel="noreferrer noopener" style={{ margin: "0 0 0 48px" }} >
                    <FaTwitter className="icon social" />
                </a>
                <a href="https://t.me/duckiescoin" target="_blank" rel="noreferrer noopener">
                    <FaTelegram className="icon social" />
                </a>
                <a href="https://www.discord.gg/YXVZ5q22Qw" target="_blank" rel="noreferrer noopener">
                    <FaDiscord className="icon social" />
                </a>

            </IconContext.Provider>


        </section>
    )
}

export default Socials;