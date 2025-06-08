import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

const Projects = () => {
    return (
        <div className="min-h-screen bg-white pt-20 px-4 sm:px-8">
            <Navbar />
            <main className="max-w-4xl mx-auto mt-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                    Projecs Page
                </h3>
                <p className="mt-4 text-gray-600">
                    Welcome to the home page of the project!
                </p>
            </main>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10 px-4 max-w-6xl mx-auto">
                <Card
                    title="Project Showcase"
                    description="Explore all the projects built using modern web technologies."
                    image="https://source.unsplash.com/600x400/?code,project"
                />
                <Card
                    title="Developer Profile"
                    description="Get to know the developer behind the work."
                    image="https://source.unsplash.com/600x400/?developer,person"
                />
                <Card
                    title="Contact & Collaboration"
                    description="Reach out for freelance, team-ups, or feedback."
                    image="https://source.unsplash.com/600x400/?contact,talk"
                />
            </div>
        </div>
    )
}

export default Projects