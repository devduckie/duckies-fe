import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaTwitter, FaTelegram, FaDiscord, FaInstagram, FaHashtag } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="bg-white text-blue-600 justify-center content-center">
            <div style={{ display: 'flex', flexDirection: useMediaQuery({ maxWidth: 600 }) ? 'column' : 'row', marginBottom: '1em', marginLeft: '1em', marginRight: '1em' }}>
                <div style={{ flex: 1, justifyContent: 'right', padding: '1em' }}>
                    <div style={{ textAlign: 'left', margin: "6px 0 0 0" }}>
                        <h3>Quick Links</h3>
                        <a href="#about" style={{ color: '#216aca' }}><FaHashtag className="inline mx-0" /> About</a><br />
                        <a href="#mint" style={{ color: '#216aca' }}><FaHashtag className="inline mx-0" /> Tokenomics</a><br />
                        <a href="#roadmap" style={{ color: '#216aca' }}><FaHashtag className="inline mx-0" /> Roadmap</a><br />
                        <a href="#team" style={{ color: '#216aca' }}><FaHashtag className="inline mx-0" /> Team</a><br />
                        <br />
                    </div>
                </div>
                <div style={{ flex: 1, justifyContent: 'right', padding: '1em' }}>
                    <div style={{ textAlign: 'left', margin: "6px 0 0 0" }}>
                        <h3>Join the Community!</h3>
                        <a href="https://twitter.com/Duckiescoin" style={{ color: '#216aca' }} target="_blank" rel="noreferrer noopener"><FaTwitter className="inline mx-2" /> Twitter</a><br />
                        <a href="https://instagram.com/duckiescoin" style={{ color: '#216aca' }} target="_blank" rel="noreferrer noopener"><FaInstagram className="inline mx-2" /> Instagram</a><br />
                        <a href="https://t.me/duckiescoin" style={{ color: '#216aca' }} target="_blank" rel="noreferrer noopener"><FaTelegram className="inline mx-2" />Telegram</a><br />
                        <a href="https://www.discord.gg/YXVZ5q22Qw" style={{ color: '#216aca' }} target="_blank" rel="noreferrer noopener"><FaDiscord className="inline mx-2" /> Discord</a><br />
                    </div>
                </div>
                {!useMediaQuery({ maxWidth: 600 }) && (<div style={{ flex: 1 }}></div>)}
                {!useMediaQuery({ maxWidth: 600 }) && (<div style={{ flex: 1 }}></div>)}
            </div>

            <span className=" font-semibold flex justify-center content-center uppercase">
                2021 &#169; Duckies Coin
            </span>
        </div>
    );
}

export default Footer;