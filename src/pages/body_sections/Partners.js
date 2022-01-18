import React from "react";
import partnerDetails from "../../data/partners.json";

const Partners = () => {
    return (
        <>
            <section id="partners" className="py-12 px-32 flex flex-col items-center justify-center">
                <h3 className='text-2xl text-white font-semibold tracking-tight text-center capitalize mb-10 md:mb-16'>
                    Partners
                </h3>

                {Object.values(partnerDetails).map(values => {
                    const { img, alt, name } = values;

                    return (
                        <>
                            <img src={img} alt={alt} className="w-48 md:w-96 animate-pulse" />
                            <p className="my-4 md:my-8 font-medium">{name}</p>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Partners;