import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import Search from '../components/Search'
import Layout from '../components/shared/Layout'

const Contact = function () {
	const [dance, setDance] = React.useState([])
	const [boldness, setBoldness] = React.useState([])
	const [consume, setConsume] = React.useState([])
	async function fetchProducts() {
		try {
			const {
				data: { products },
			} = await axios.get('/api/v1/products')

			setDance(
				products
					.sort((a, b) => a.length.localeCompare(b.type))
					.filter((x) => x.series.toLowerCase() === 'dance')
			)
			setBoldness(
				products
					.sort((a, b) => a.length.localeCompare(b.type))
					.filter((x) => x.series.toLowerCase() === 'boldness')
			)
			setConsume(
				products
					.sort((a, b) => a.length.localeCompare(b.type))
					.filter((x) => x.series.toLowerCase() === 'consume by motions')
			)
		} catch (error) {
			console.log(error)
		}
	}
	React.useEffect(() => {
		fetchProducts()
	}, [])
	return (
		<>
			<Helmet>
				<title>Contact</title>
			</Helmet>
			<Layout>
				<div className="home">
					<div className="flex py-10 mb-10 md:mb-[100px] justify-center md:mt-7 md:pt-20">
						<Search />
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1 md:pt-10">
						<div className="bg-white pt-5">
							<h1 className="pl-5 text-xl font-bold">DANCE SERIES</h1>
							<div className="flex flex-wrap shadow-lg items-center justify-center">
								{dance.map((d) => (
									<div
										key={d._id}
										className="relative w-[80%] md:w-[250px] m-2">
										<div className="w-full">
											<img
												className="h-[350px] w-full md:w-[250px] object-cover"
												src={d.image}
												alt={d.name}
											/>
										</div>
										<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
											<div className="h-[50%]">
												<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
													{d.name}
												</p>
												<p className="text-blue-900 absolute top-0 right-2">
													Dim: {d.length}
												</p>
												<p className="w-full px-2 text-[11.5px] mt-4 text-gray-700 text-center font-light">
													{d.description}
												</p>
											</div>
											<div className="w-full h-[35%]">
												<button className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
													Request customize
												</button>
												<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
													Add to cart
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="bg-white pt-5 mt-40 md:mt-0 md:pt-0">
							<h1 className="mt-5 md:mt-0 pl-5 text-xl font-bold">
								BOLDNESS SERIES
							</h1>
							<div className="flex flex-wrap shadow-lg items-center justify-center">
								{boldness.map((b) => (
									<div
										key={b._id}
										className="relative w-[80%] md:w-[250px] m-2">
										<div className="w-full">
											<img
												className="h-[350px] w-full md:w-[250px] object-cover"
												src={b.image}
												alt={b.name}
											/>
										</div>
										<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
											<div className="h-[50%]">
												<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
													{b.name}
												</p>
												<p className="text-blue-900 absolute top-0 right-2">
													Dim: {b.length}
												</p>
												<p className="w-full text-[11.5px] px-2 mt-4 text-gray-700 text-center font-light">
													{b.description}
												</p>
											</div>
											<div className="w-full h-[35%]">
												<button className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
													Request customize
												</button>
												<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
													Add to cart
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mt-40 mb-10 shadow-lg bg-white pt-10 ">
						<h1 className="pl-5 text-xl font-bold">CONSUME BY MOTION SERIES</h1>
						<div className="flex flex-wrap items-center justify-center">
							{consume.map((c) => (
								<div key={c._id} className="relative w-[80%] md:w-[250px] m-2">
									<div className="w-full">
										<img
											className="h-[350px] w-full md:w-[250px] object-cover"
											src={c.image}
											alt={c.name}
										/>
									</div>
									<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
										<div className="h-[50%]">
											<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
												{c.name}
											</p>
											<p className="text-blue-900 absolute top-0 right-2">
												Dim: {c.length}
											</p>
											<p className="w-full px-2 text-[11.5px] mt-4 text-gray-700 text-center font-light">
												{c.description}
											</p>
										</div>
										<div className="w-full h-[35%]">
											<button className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
												Request customize
											</button>
											<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
												Add to cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Contact
