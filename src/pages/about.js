import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/shared/Layout'

const Home = function () {
	const joelImg = require('../images/joel2.jpeg')
	return (
		<>
			<Helmet>
				<title>Joel Arueya Studio: ABOUT-PAGE</title>
			</Helmet>
			<div className="home">
				<Layout>
					<div className="flex flex-row justify-center items-center py-10">
						<div className="w-[90%] md:w-[50%]">
							<img
								src={joelImg}
								alt="owner"
								className="w-[500px] h-[500px] rounded-xl md:rounded-l-xl float-left aspect-[1/1] lg:aspect-[1/2] shadow-lg object-cover object-center mb-5 md:mb-0 mr-14 [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] lg:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
							/>
							<span className="text-neutral-50">
								Arueya Joel graduated from the Auchi Polytechnic, Edo State
								Nigeria with a Higher National Diploma in Fine Art (Painting).
								Joel has held a solo exhibition supported by Guaranty Trust
								Bank, Nigeria. He has also participated in several group
								exhibitions and art auctions at Marvel's Attic Art Auction,
								United Kingdom, SOGAL Art Auction and TKMG, Nigeria. He
								participated in Kunst Asyl” art residence in Quedlinburg /
								Germany His work was the subject of a sterling bank advert to
								promote culture and creativity in Nigeria. His work can be found
								in many significant homes both in Nigeria and abroad.
							</span>
						</div>
					</div>
				</Layout>
			</div>
		</>
	)
}

export default Home
