import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './shared/Button'

function ShortAbout() {
	const joelImg = require('../images/joel2.jpeg')
	const navigate = useNavigate()
	const handleFunc = () => {
		navigate('/about-joelarueyastudio')
	}
	return (
		<div className="relative flex flex-col md:flex-row items-center justify-between w-[70%] h-[550px] md:h-[350px] mx-auto">
			<p className="w-full md:w-[70%] text-white font-light text-center text-md pt-10 md:pt-20 md:border-r-[1px] md:border-[rgba(255,255,255,0.2)] md:pr-10 h-full">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
			</p>
			<div className="h-[50%]">
				<div className="md:ml-20">
					<img
						className="border-[1px] border-white w-[120px] h-[120px] object-cover rounded-full object-center "
						src={joelImg}
						alt=""
					/>
				</div>
				<div className="hover:opacity-[0.5] absolute bottom-[40px] md:bottom-[120px] right-[170px] md:right-[100px] w-[80px] h-[30px] bg-cyan-900 opacity-[0.7] rounded-bl-xl"></div>
				<div className="absolute bottom-[10px] md:bottom-[90px] right-[150px] md:right-[80px] mb-10">
					<Button handleFunc={handleFunc} type="medium">
						Meet rue
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ShortAbout
