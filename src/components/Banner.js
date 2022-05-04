import React from 'react'
import Search from './Search'

function Banner() {
	const bannerImage = require('../images/banner1.jpeg')
	return (
		<div className="relative">
			<img
				src={bannerImage}
				className="w-full h-[300px] object-cover object-center"
				alt=""
			/>
			<div className="absolute top-[40%] flex flex-col w-full items-center">
				<h1 className="text-[20px] mb-3 text-white bg-blur2 px-10  rounded-full">
					WE BELIEVE
				</h1>
				<span className="tracking-widest font-light rounded-full text-xs bg-blur2 text-white px-10 py-1">
					ART CAN MAKE THIS WORLD A BETTER PLACE
				</span>
				<Search />
			</div>
		</div>
	)
}

export default Banner
