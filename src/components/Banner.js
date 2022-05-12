import React from 'react'

function Banner() {
	// const bannerImage = require('../images/banner1.jpeg')
	return (
		<div className="relative pt-[230px]">
			{/* <img
				src={bannerImage}
				className="w-full h-[250px] object-cover object-bottom"
				alt=""
			/> */}
			<div className="relative top-[50%] flex flex-col w-[80%] justify-center items-center mx-auto">
				<p className="scalePosition text-[30px] md:text-[70px] text-gray-600 absolute -top-44 md:-top-12 right-[165px] md:right-[80px] font-thin">
					JOEL
				</p>
				<p className="scalePosition2 text-[40px] md:text-[100px] text-gray-100 absolute md:right-[50px] -top-[150px] md:top-0 font-thin">
					ARUEYA
				</p>
				{/* <h1 className="text-[18px] tracking-widest mb-1 text-white bg-blur2 px-10 py-1  rounded-full">
					WE BELIEVE
				</h1>
				<span className="tracking-widest font-light rounded-full text-[11px] bg-blur2 text-white px-10 py-1 ">
					ART CAN MAKE THIS WORLD A BETTER PLACE
				</span> */}
			</div>
		</div>
	)
}

export default Banner
