import React from 'react'

const Card = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default Card
