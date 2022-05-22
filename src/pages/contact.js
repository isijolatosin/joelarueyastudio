import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/shared/Layout'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'
import { RiTimeFill } from 'react-icons/ri'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user-context'

const Contact = function () {
	const navigate = useNavigate()
	const [requestData, setRequesteData] = React.useState(
		localStorage.getItem('requestData')
			? JSON.parse(localStorage.getItem('requestData'))
			: []
	)
	const [showResponse, setShowResponse] = React.useState(false)
	const { user } = useContext(UserContext)
	const [contactInput, setcontactInput] = React.useState({
		name: user?.displayName ? user?.displayName : '',
		email: user?.email ? user?.email : '',
		subject: requestData?.description ? requestData?.description : '',
		message: requestData?.image ? requestData?.image : '',
		error: null,
	})

	const contactContent = [
		{
			heading: 'our hours',
			content1: '9:00 AM - 6:00 PM',
			content2: 'Monday - Friday',
			icon1: <RiTimeFill />,
			icon2: <BsFillCalendar2EventFill />,
		},
		{
			heading: 'location',
			content1: "Joel's Place",
			content2: 'Lagos State',
			icon1: <ImLocation />,
		},
		{
			heading: 'connect',
			content1: '1234567890',
			content2: 'email',
			content3: 'email2',
			icon1: <AiFillPhone />,
			icon2: <MdEmail />,
			icon3: <MdEmail />,
		},
	]
	const handleContactInput = (e) => {
		setcontactInput({ ...contactInput, [e.target.name]: e.target.value })
	}
	function handleSubmit(e) {
		e.preventDefault()
		try {
			window.open(
				`mailto:joelarueya@gmail.com?subject=${contactInput.subject}&body=${contactInput.name}: ${contactInput.message}. My email is ${contactInput.email}`
			)
			setcontactInput({
				name: '',
				email: '',
				subject: '',
				message: '',
				error: null,
			})
		} catch (error) {
			console.log(error)
			setcontactInput({ ...contactInput, error: error.message })
		}
		setRequesteData([])
		setShowResponse(true)
		localStorage.setItem('requestData', '')
	}
	return (
		<>
			<Helmet>
				<title>Joel Arueya Studio: CONTACT-PAGE</title>
			</Helmet>
			<div className=" home">
				<Layout>
					<div className="relative md:pt-[300px] pt-[300px]">
						<h1 className="scaleInfinite text-white ml-[60px] md:ml-0 absolute top-24 text-3xl italic md:left-[42%]">
							CONNECT <span className="text-xl">with</span>{' '}
							<span className="text-cyan-900 font-bold">JOEL</span>
						</h1>
						<div className="bg-white flex flex-col md:flex-row justify-center items-center md:px-20 md:rounded-t-[50px]">
							<form
								onSubmit={handleSubmit}
								className="shadow-xl shadow-white mt-[-70px] w-full flex flex-col items-center md:max-w-[50%] bg-blur py-5 mb-5">
								<span className="text-[10px] font-light mb-2">
									Contact -{' '}
									<Link to="/" className="text-cyan-900 text-sm navStyleChild">
										JOELARUEYASTUDIO
									</Link>
								</span>
								<p className="font-light text-left text-[14px] max-w-[80%] lg:max-w-[70%] my-5">
									At Joelarueyastudio, we are customer centric, we take pride in
									our customers. We are committed to bringing you innovative art
									designs and providing exceptional delicery experience. We
									value you our customers and we are committed to long time
									support. We respond within 24-48 business hours Monday -
									Friday.
									<br />
									<br />
									<span className="text-cyan-900 italic text-xs border-l-[10px] border-yellow-500 pl-1">
										Tell us what your design preferences are and we will brush
										it to life...
									</span>
								</p>
								<div className="w-[90%] md:w-[90%] lg:w-[70%] 2xl:w-[50%] mx-auto flex flex-col items-center">
									<input
										type="text"
										name="name"
										id="name"
										value={contactInput.name}
										onChange={handleContactInput}
										placeholder="Full Name"
										className="w-[100%] mb-5 text-neutral-500 font-light bg-white block px-3 py-2 border-gray-200 rounded-[2px] text-xs border-[1px] placeholder-neutral-300 focus:outline-none focus:border-yellow-100 focus:ring-1 focus:ring-yellow-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 outline-0"
									/>
									<input
										type="text"
										name="email"
										id="email"
										value={contactInput.email}
										onChange={handleContactInput}
										placeholder="Email"
										className="w-[100%] mb-5 text-neutral-500 font-light bg-white block px-3 py-2 border-gray-200 rounded-[2px] text-xs border-[1px] placeholder-neutral-300 focus:outline-none focus:border-yellow-100 focus:ring-1 focus:ring-yellow-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 outline-0"
									/>
									<input
										type="text"
										name="subject"
										id="subject"
										value={contactInput.subject}
										onChange={handleContactInput}
										placeholder="subject"
										className="w-[100%] mb-5 text-neutral-500 font-light bg-white block px-3 py-2 border-gray-200 rounded-[2px] text-xs border-[1px] placeholder-neutral-300 focus:outline-none focus:border-yellow-100 focus:ring-1 focus:ring-yellow-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 outline-0"
									/>
									<textarea
										id="message"
										rows="10"
										cols="50"
										name="message"
										value={contactInput.message}
										onChange={handleContactInput}
										placeholder="message..."
										className="w-[100%] mb-5 text-neutral-500 font-light bg-white block px-3 py-2 border-gray-200 rounded-[2px] text-xs border-[1px] placeholder-neutral-300 focus:outline-none focus:border-yellow-100 focus:ring-1 focus:ring-yellow-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 outline-0"
									/>
									<div className="text-center text-xs text-red-800">
										{contactInput.error ? (
											<p>Error message: {contactInput.error}</p>
										) : null}
									</div>
									<button
										disabled={
											!contactInput.name ||
											!contactInput.email ||
											!contactInput.subject ||
											!contactInput.message
										}
										className="bg-neutral-600 w-[70%] text-white py-2 text-sm font-light tracking-wide"
										type="submit">
										Send inquiry
									</button>
									{showResponse && (
										<div className="flex flex-col text-center">
											<span className="mt-5 text-yellow-600 font-light tracking-wide text-sm">
												Your enquiry has been submitted to joelarueyastudio
											</span>
											<div className="flex flex-row w-[70%] mx-auto">
												<span
													onClick={() => {
														navigate('/')
														localStorage.setItem('requestData', '')
													}}
													className="font-bold hover:cursor-pointer mx-auto text-[12px] mt-5 text-cyan-900 navStyleChild ">
													Back to Home
												</span>
												<span
													onClick={() => {
														navigate('/art-gallery/:joelarueyastudio')
														localStorage.setItem('requestData', '')
													}}
													className="font-bold hover:cursor-pointer mx-auto text-[12px] mt-5 text-cyan-900 navStyleChild ">
													Back to Gallery
												</span>
											</div>
										</div>
									)}
								</div>
							</form>
							<div className="md:ml-10 w-full my-5 border-[5px] pl-10 rounded-[100px] border-l-0 p-5 border-cyan-900">
								<div className="relative">
									<div className="w-[20px] h-[50px] rotate-45 bg-yellow-500"></div>
									<h1 className="text-2xl text-cyan-900 absolute bottom-0 font-bold left-0">
										CONTACT DETAILS
									</h1>
								</div>
								<div className="mt-10 ">
									{contactContent.map((item, idx) => (
										<div key={idx} className="mb-10">
											<h3 className="text-[18px] border-b-[1px] border-yellow-200 mb-2 text-cyan-900 font-semibold uppercase italic">
												{item.heading}
											</h3>
											<div className="flex items-center tracking-widest">
												<span className="text-yellow-600">{item.icon1}</span>
												<p className="text-[14px] font-light ml-1">
													{item.content1 && item.content1}
												</p>
											</div>
											<div className="flex items-center tracking-widest">
												<span className="text-yellow-600">{item.icon2}</span>
												<p className="text-[14px] font-light ml-1">
													{item.content2 && item.content2}
												</p>
											</div>

											<div className="flex items-center tracking-widest">
												<span className="text-yellow-600">{item.icon3}</span>
												<p className="text-[14px] font-light ml-1">
													{item.content3 && item.content3}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</div>
		</>
	)
}

export default Contact
