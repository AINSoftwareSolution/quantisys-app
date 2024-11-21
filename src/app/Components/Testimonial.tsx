import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cardData } from '../utilis/data'

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center flex-wrap bg-gray-900 min-h-screen">
    {cardData.map((card) => (
      <div
        key={card.id}
        className="relative overflow-hidden m-2 min-w-[220px] max-w-[310px] w-full text-gray-800 text-left shadow-none"
      >
        <blockquote className="block relative bg-gray-100 rounded-lg p-6 text-sm font-medium italic leading-6">
          {card.quote}
          <div className="absolute top-full w-0 h-0 border-l-0 border-r-[25px] border-transparent border-t-[25px] border-gray-100"></div>
        </blockquote>
        <img
          className="absolute top-10 left-2.5 rounded-full h-24 w-24"
          src={card.imgSrc}
          alt={`${card.author}'s profile`}
        />
        <div className="absolute bottom-10 left-28">
          <h5 className="text-white text-xs font-extrabold uppercase opacity-80">
            {card.author}
            <span className="font-normal lowercase pl-1">{card.site}</span>
          </h5>
        </div>
      </div>
    ))}
  </div>

  )
}

export default Testimonial