import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="my-24">
            <h1 className="text-2xl text-white font-semibold tracking-tight text-center capitalize">Contact us</h1>
            <h3 className="text-sm text-white font-semibold tracking-tight text-center mb-4">We value your opinion. Write us in the form below</h3>
            <form action="" className=" w-full mx-auto text-center">
                <input className="w-1/3 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Full Name"></input>
                <input className="w-1/3 bg-gray-300 text-gray-900 mt-2 p-3 ml-2 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email Address"></input>
                <div class="mt-8">
                    <textarea
                        className="h-48 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text" placeholder="Message"></textarea>
                </div>
                <div className="mt-8">
                    <button
                        className="capitalize≈≈ text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-1/4 h-12 focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact;