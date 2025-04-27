import React from 'react'

function Card({ image, title, text, type, price }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 relative flex justify-center items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img src={"http://localhost:9000"+image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-2 right-2 bg-[#2D1B16] text-white px-3 py-1 rounded-full text-sm">
          {type}
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        <h3 className="font-bold text-xl mb-2 text-[#2D1B16]">{title}</h3>
        <p className="text-gray-700 text-base mb-2">{text}</p>
        <p className="text-[#2D1B16] font-bold text-lg">${price}</p>
      </div>
    </div>
  )
}

export default Card