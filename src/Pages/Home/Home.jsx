import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import InstallButton from './InstallButton'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-8"> {/* slightly gray outer bg */}
            <Navbar />

            <main className="max-w-4xl mx-auto mt-8">
                <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">Welcome to My Collections Web Project</h3>
                    <p className="mt-4 text-gray-600 text-center">
                        A collection of my full-stack projects, GitHub repositories, and professional links.
                    </p>

                    {/* Bio & Objective Section */}
                    <div className="mt-16 text-left max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl shadow">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">About Me</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            👋 Hi, I'm <strong>Ritesh Kumar</strong>, a passionate full-stack developer dedicated to building efficient and elegant web applications.
                            With hands-on experience in React, Node.js, and MongoDB, I love solving real-world problems through clean and scalable code.
                        </p>
                        <p className="text-gray-700 text-sm mt-3">
                            🎯 <strong>Objective:</strong> To obtain a challenging position as a software developer where I can contribute my skills and grow alongside a dynamic team.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1oNH6M2kyU2uA9_ro9O3lNqwBoJUUksml/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                        >
                            📄 View Resume
                        </a>
                    </div>

                    {/* Cards section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">My Projects</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Explore all my personal and collaborative projects built with React, Node, and more.
                            </p>
                            <Link
                                to="/projects"
                                className="inline-block mt-2 text-amber-600 font-medium hover:underline"
                            >
                                Visit Projects →
                            </Link>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">Scan QR to download App</h4>
                            <InstallButton />
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?data=https://collwebs.vercel.app/&size=150x150"
                                alt="QR Code"
                                className="w-32 h-32 mt-3"
                            />
                            <p className="mt-2 text-sm text-gray-600">Or visit my profile directly!</p>
                        </div>
                    </div>
                    {/* Terminal-style Code Snippet */}
                    <div className="mt-12 max-w-3xl mx-auto bg-black text-green-400 font-mono p-4 rounded-lg shadow-md text-sm">
                        <p className="mb-1"># Clone My CollWebs & Explore Projects</p>
                        <code>git clone https://github.com/Riteshmaurya1/collwebs.git</code>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Home
