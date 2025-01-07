import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div className="text-white min-h-screen flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-lg shadow-lg w-[90%] p-8">
                <div className="flex flex-col items-center text-center">
                    <img
                        src="./images/my-pic.png"
                        alt="Developer"
                        className="w-48 h-48 rounded-full mb-6"
                    />
                    <h1 className="text-4xl font-bold mb-4 text-teal-400">About Me</h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I am a passionate front-end developer who loves creating dynamic and responsive websites.
                        My expertise lies in building visually appealing and user-friendly interfaces that adapt
                        seamlessly to different devices.
                        <br />
                        You can contact me for college projects, delivering websites for startups, businesses,
                        EdTech platforms, and more. Let's collaborate to bring your ideas to life with innovative
                        and effective web solutions!
                    </p>
                    <Link href="https://prabh-singh-1.github.io/Portfolio/" ><button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg">
                        Learn More
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
