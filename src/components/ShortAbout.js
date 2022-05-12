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
		<div className="relative scaleInfinite mb-10 md:mt-[200px] rounded-xl bg-blur2 flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[70%] h-[550px] md:h-[250px] mx-auto">
			<p className=" h-[200px] px-5 w-full md:w-[70%] text-white font-light text-left text-md pt-10 md:border-r-[1px] md:border-[rgba(255,255,255,0.2)] md:pr-10">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
			</p>
			<div className="h-[50%]">
				<div className="mt-5 md:mt-0 md:mx-20 ">
					<img
						className="border-[1px] border-white w-[120px] h-[120px] object-cover rounded-full object-center "
						src={joelImg}
						alt=""
					/>
				</div>
				<div className="hover:opacity-[0.5] absolute bottom-[110px] md:bottom-[80px] right-[170px] md:right-[180px] w-[80px] h-[30px] bg-cyan-900 opacity-[0.7] rounded-bl-xl"></div>
				<div className="absolute bottom-[75px] md:bottom-[50px] right-[150px] md:right-[160px] mb-10">
					<Button handleFunc={handleFunc} type="medium">
						Meet rue
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ShortAbout
