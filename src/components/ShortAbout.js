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
		<div className="relative scaleInfinite mb-10 mt-[-50px] md:mt-[200px] rounded-xl bg-blur2 flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[70%] h-[550px] md:h-[250px] mx-auto">
			<p className=" h-[200px] px-5 w-full md:w-[70%] text-white font-light text-left text-md pt-2 md:border-r-[1px] md:border-[rgba(255,255,255,0.2)] md:pr-10">
				Arueya Joel graduated from the Auchi Polytechnic, Edo State Nigeria with
				a Higher National Diploma in Fine Art (Painting). Joel has held a solo
				exhibition supported by Guaranty Trust Bank, Nigeria. He has also
				participated in several group exhibitions and art auctions at Marvel's
				Attic Art Auction, United Kingdom, SOGAL Art Auction and TKMG, Nigeria.
				He participated in Kunst Asyl” art residence in Quedlinburg / Germany
				His work was the subject of a sterling bank advert to promote culture
				and creativity in Nigeria. His work can be found in many significant
				homes both in Nigeria and abroad.
			</p>
			<div className="h-[50%]">
				<div className="mt-20 md:mt-0 md:mx-20 ">
					<img
						className="border-[1px] border-white w-[120px] h-[120px] object-cover rounded-full object-center "
						src={joelImg}
						alt=""
					/>
				</div>
				<div className="hover:opacity-[0.5] absolute bottom-[45px] md:bottom-[80px] right-[170px] md:right-[180px] w-[80px] h-[30px] bg-cyan-900 opacity-[0.7] rounded-bl-xl"></div>
				<div className="absolute bottom-[10px] md:bottom-[50px] right-[150px] md:right-[160px] mb-10">
					<Button handleFunc={handleFunc} type="medium">
						Meet rue
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ShortAbout
