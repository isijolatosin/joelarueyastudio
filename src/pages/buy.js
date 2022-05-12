import axios from 'axios'
import React from 'react'
import Layout from '../components/shared/Layout'

const Buy = () => {
	const [similarData, setSimilardata] = React.useState([])
	const data = JSON.parse(localStorage.getItem('purchaseData'))
	const [show, setShow] = React.useState(false)

	async function fetchProducts() {
		if (data) {
			try {
				const {
					data: { products },
				} = await axios.get('/api/v1/products')
				setSimilardata(
					products
						.filter((x) => x.series.toLowerCase() === data?.series)
						.filter((i) => i._id !== data?._id)
						.sort((a, b) => a.length.localeCompare(b.length))
				)
			} catch (error) {
				console.log(error)
			}
		}
	}
	React.useEffect(() => {
		fetchProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleBuy = () => {
		localStorage.setItem('purchaseData', '')
	}

	setTimeout(() => {
		setShow(true)
	}, 3000)

	const lengthArr = [
		'4ft/3ft',
		'4ft/3.5ft',
		'4ft/4ft',
		'4ft/4.5ft',
		'4ft/5ft',
		'5ft/4ft',
		'5ft/4.5ft',
		'5ft/5ft',
	]

	return (
		<div className="home">
			<Layout>
				{data &&
					(show ? (
						<div className="w-[100%] md:w-[80%] bg-gray-200 md:mt-10 flex flex-col md:flex-row mx-auto">
							<img
								className="flex-[0.5] h-[600px] w-[600px] object-cover"
								src={data?.image}
								alt={data?.name}
							/>
							<div className="flex-[0.5] bg-neutral-300 w-full p-10 font-light">
								<h1 className="text-4xl font-bold w-[100%] md:w-[70%]">
									{data?.name}
								</h1>
								<p className="w-[100%] md:w-[60%] mt-5">{data?.description}</p>
								<div className="w-[100%] md:w-[70%] mt-5 flex border-t-[1px] border-b-[1px] py-5 border-neutral-400 justify-between">
									<span>#{data?.price}</span>
									<span>{data?.length}</span>
								</div>
								<div>
									<select
										className=" text-gray-500 block w-[100%] md:w-[70%] h-[40px] my-10 bg-transparent mr-5 px-3 py-1 border border-gray-100 rounded-sm text-[15px] font-light shadow-sm placeholder-gray-200 focus:outline-none focus:border-gray-100 focus:ring-[1px] focus:ring-gray-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-noneinvalid:border-red-800 invalid:text-red-800 focus:invalid:border-red-800 focus:invalid:ring-red-800 outline-0"
										// onChange={handleOnChange}
										id="length"
										// value={bundles.length}
										name="length">
										{lengthArr.map((len, idx) => (
											<option key={idx}>{len}</option>
										))}
									</select>
								</div>
								<button
									onClick={handleBuy}
									className="w-[100%] md:w-[70%] bg-gray-400 hover:bg-gray-600 text-white h-[50px] ease duration-300">
									Add to cart
								</button>
								<div className="flex flex-row mt-10 w-[100%] flex-wrap justify-center md:justify-start">
									{similarData.map((dt) => (
										<img
											className="w-[70px] h-[70px] object-cover rounded-lg m-2"
											src={dt?.image}
											alt={dt?.name}
										/>
									))}
								</div>
							</div>
						</div>
					) : (
						<div className="rounded-full absolute top-[130px] md:top-[170px] progress">
							<div className="inner"></div>
						</div>
					))}
			</Layout>
		</div>
	)
}

export default Buy
