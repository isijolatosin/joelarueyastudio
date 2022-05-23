import axios from 'axios'
import React, { useContext } from 'react'
import Layout from '../components/shared/Layout'
// import Button from '../components/Button'
import Flutter from '../components/Flutter'
import { UserContext } from '../context/user-context'

const Buy = () => {
	const { user } = useContext(UserContext)
	const [similarData, setSimilardata] = React.useState([])
	const data = JSON.parse(localStorage.getItem('purchaseData'))
	const [show, setShow] = React.useState(false)
	const [address, setaddress] = React.useState({
		email: '',
		street: '',
		state: '',
		country: '',
	})

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
	].filter((a) => a !== data?.length)

	const handleChangeAuthUser = (e) => {
		setaddress({ ...address, [e.target.name]: e.target.value })
	}

	return (
		<div className="home">
			<Layout>
				{data &&
					(show ? (
						<div className="w-[100%] md:w-[70%] bg-neutral-200 md:mt-10 flex flex-col md:flex-row mx-auto mb-12">
							<div className="flex-[0.6]">
								<img
									className="h-[600px] w-full object-cover object-top"
									src={data?.image}
									alt={data?.name}
								/>
								<p className="ml-2 mt-10 md:mt-5 text-center md:text-left text-cyan-900 font-bold">
									Related Art Work
								</p>
								<div className="flex flex-row mt-1 mb-10 w-[100%] flex-wrap justify-center md:justify-start">
									{similarData.map((dt) => (
										<img
											key={dt._id}
											className="w-[70px] h-[70px] object-cover rounded-lg m-2"
											src={dt?.image}
											alt={dt?.name}
										/>
									))}
								</div>
							</div>
							<div className="flex-[0.4] bg-neutral-50 w-full p-10 font-light">
								<div className="border-b-[1px] border-neutral-400 mb-10">
									<h1 className="text-4xl font-bold w-[100%] md:w-[70%]">
										{data?.name}
									</h1>
									<p className="w-[100%] md:w-[60%] mt-5">
										{data?.description}
									</p>
									<div className="w-[100%] mt-5 flex border-t-[1px] border-b-[1px] py-5 border-neutral-200 justify-between">
										<span>#{data?.price}</span>
										<span>{data?.length}</span>
									</div>
									<div>
										<select
											className=" text-neutral-500 block w-[100%] h-[40px] my-10 bg-transparent mr-5 px-3 py-1 border border-neutral-100 rounded-sm text-[15px] font-light shadow-sm placeholder-neutral-200 focus:outline-none focus:border-neutral-100 focus:ring-[1px] focus:ring-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200 disabled:shadow-noneinvalid:border-red-800 invalid:text-red-800 focus:invalid:border-red-800 focus:invalid:ring-red-800 outline-0"
											// onChange={handleOnChange}
											id="length"
											// value={bundles.length}
											name="length">
											{lengthArr.map((len, idx) => (
												<option key={idx}>{len}</option>
											))}
										</select>
									</div>
								</div>
								<div className="border-b-[1px] border-neutral-400 pb-10">
									{!user?.email && (
										<div>
											<input
												type="text"
												name="email"
												id="email"
												value={address?.email}
												onChange={handleChangeAuthUser}
												placeholder="email"
												className="text-neutral-500 block w-[100%] h-[40px] my-2 bg-transparent mr-5 px-3 py-1 border border-neutral-100 rounded-sm text-[15px] font-light shadow-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:italic focus:outline-none focus:border-neutral-100 focus:ring-[1px] focus:ring-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200 disabled:shadow-noneinvalid:border-red-800 invalid:text-red-800 focus:invalid:border-red-800 focus:invalid:ring-red-800 outline-0"
											/>
										</div>
									)}
									<div>
										<input
											type="text"
											name="street"
											id="street"
											value={address?.street}
											onChange={handleChangeAuthUser}
											placeholder="address"
											className="text-neutral-500 block w-[100%] h-[40px] my-2 bg-transparent mr-5 px-3 py-1 border border-neutral-100 rounded-sm text-[15px] font-light shadow-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:italic focus:outline-none focus:border-neutral-100 focus:ring-[1px] focus:ring-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200 disabled:shadow-noneinvalid:border-red-800 invalid:text-red-800 focus:invalid:border-red-800 focus:invalid:ring-red-800 outline-0"
										/>
									</div>
									<div>
										<input
											type="text"
											name="state"
											id="state"
											value={address?.state}
											onChange={handleChangeAuthUser}
											placeholder="state"
											className="text-neutral-500 block w-[100%] h-[40px] my-2 bg-transparent mr-5 px-3 py-1 border border-neutral-100 rounded-sm text-[15px] font-light shadow-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:italic focus:outline-none focus:border-neutral-100 focus:ring-[1px] focus:ring-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200 disabled:shadow-noneinvalid:border-red-800 invalid:text-red-800 focus:invalid:border-red-800 focus:invalid:ring-red-800 outline-0"
										/>
									</div>
									<div>
										<input
											type="text"
											name="country"
											id="country"
											value={address?.country}
											onChange={handleChangeAuthUser}
											placeholder="country"
											className="text-neutral-500 block w-[100%] h-[40px] my-2 bg-transparent mr-5 px-3 py-1 border border-neutral-100 rounded-sm text-[15px] font-light shadow-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:italic focus:outline-none focus:border-neutral-100 focus:ring-[1px] focus:ring-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200 disabled:shadow-noneinvalid:border-red-800 invalid:text-red-800 focus:invalid:border-red-800 focus:invalid:ring-red-800 outline-0"
										/>
									</div>
									{/* <Button product={data} address={address} /> */}
									<Flutter product={data} address={address} />
								</div>
							</div>
						</div>
					) : (
						<div>
							<div className="load-wrapper mt-[-300px]">
								<div className="circle"></div>
								<div className="circle"></div>
								<div className="circle"></div>
							</div>
						</div>
					))}
			</Layout>
		</div>
	)
}

export default Buy
