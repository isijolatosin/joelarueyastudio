import React from 'react'
import axios from 'axios'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import data from '../files.json'

function Feat() {
	const [dance, setDance] = React.useState([])
	const [boldness, setBoldness] = React.useState([])
	const [consume, setConsume] = React.useState([])
	const [current, setCurrent] = React.useState(0)
	const [modal, setModal] = React.useState(true)
	const [index, setIndex] = React.useState(0)
	const [modalData, setModalData] = React.useState([])
	const length = dance.length

	async function fetchProducts() {
		try {
			const {
				data: { products },
			} = await axios.get('/api/v1/products')
			setTimeout(() => {
				setDance(
					products
						.filter((x) => x.series.toLowerCase() === 'dance')
						.sort((a, b) => a.length.localeCompare(b.length))
				)
				setBoldness(
					products
						.filter((x) => x.series.toLowerCase() === 'boldness')
						.sort((a, b) => a.length.localeCompare(b.length))
				)
				setConsume(
					products
						.filter((x) => x.series.toLowerCase() === 'consume by motions')
						.sort((a, b) => a.length.localeCompare(b.length))
				)
			}, 2000)
		} catch (error) {
			console.log(error)
		}
	}
	React.useEffect(() => {
		fetchProducts()
	}, [])

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(data.files) || data.files.length <= 0) {
		return null
	}
	const handleOpenModal = (val) => {
		if (val === 0) {
			setModalData(dance)
			setModal(true)
		}
		if (val === 1) {
			setModalData(boldness)
			setModal(true)
		}
		if (val === 2) {
			setModalData(consume)
			setModal(true)
		}
		setIndex(val)
	}
	const features = [
		{ item: dance.slice(0, 6), id: 1, name: 'dance' },
		{ item: boldness.slice(0, 6), id: 2, name: 'boldness' },
		{ item: consume.slice(0, 6), id: 3, name: 'consume' },
	]
	const description = [
		{
			text: "Dance is one of the way of express one's self, Dance, the art of precise, expressive, and graceful human movement, traditionally, but not necessarily, performed in accord with musical accompaniment. Dancing developed as a natural expression of united feeling and action.",
		},
		{
			text: 'Boldness, the art of precise, expressive, and graceful human movement, traditionally, but not necessarily, performed in accord with musical accompaniment. Dancing developed as a natural expression of united feeling and action.',
		},
		{
			text: 'Consume developed as a natural expression of united feeling and action.',
		},
	]

	// feature image swipe logic
	const panels = document.querySelectorAll('.panel')

	panels.forEach((panel) => {
		panel.addEventListener('click', () => {
			removeActiveClasses(panel)
			panel.classList.add('active')
		})
	})

	const removeActiveClasses = () => {
		panels.forEach((panel) => {
			panel.classList.remove('active')
		})
	}

	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="flex flex-col w-full items-center bg-[rgba(255,255,255,1)] pb-10 pt-5 mt-10 md:pt-32">
				<h1 className="text-gray-700 text-lg md:text-2xl font-bold mb-7">
					FEATURED ART WORKS
				</h1>
				<div className="catBg w-full md:w-[50%] px-5 md:px-10 py-5 md:rounded-full flex items-center justify-evenly">
					<div
						onClick={() => {
							setIndex(0)
						}}
						className="card w-[80px] h-[50px] md:w-[100px] md:h-[100px]">
						<div className="front">
							<span>DANCE</span>
						</div>
						<div className="back">
							<img src={dance[0]?.image} className="cardImg" alt="" />
						</div>
					</div>
					<div
						onClick={() => {
							setIndex(1)
						}}
						className="card w-[80px] h-[50px] md:w-[100px] md:h-[100px]">
						<div className="front">
							<span>BOLDNESS</span>
						</div>
						<div className="back">
							<img src={boldness[0]?.image} className="cardImg" alt="" />
						</div>
					</div>
					<div
						onClick={() => {
							setIndex(2)
						}}
						className="card w-[80px] h-[50px] md:w-[100px] md:h-[100px]">
						<div className="front">
							<span>CONSUME</span>
						</div>
						<div className="back">
							<img src={consume[0]?.image} className="cardImg" alt="" />
						</div>
					</div>
					<div
						onClick={() => handleOpenModal(index)}
						className="card w-[80px] h-[50px] md:w-[100px] md:h-[100px]">
						<div className="front text-white flex items-center justify-center text-xl uppercase">
							<p className="text-[12px] ml-1 font-light my-5 text-center leading-4">
								More {features[index]?.name} Art work
							</p>
						</div>
						<div className="back  mt-0">
							<span className="text-black">{features[index]?.name}</span>
						</div>
					</div>
				</div>
				<div className="mt-10 w-[90%] md:w-[80%] h-[90%] md:h-[700px] flex flex-col items-center">
					<div className="mb-5">
						<span className="text-3xl capitalize">{features[index]?.name}</span>
					</div>
					<div className="mb-10">
						<div className="w-[60%] mx-auto text-center">
							<span>{description[index].text}</span>
						</div>
						<div className="container">
							<div
								className="panel active"
								style={{
									backgroundImage: `url(${features[index].item[0]?.image})`,
								}}>
								<h3>...joelarueya</h3>
							</div>
							<div
								className="panel"
								style={{
									backgroundImage: `url(${features[index].item[1]?.image})`,
								}}>
								<h3>...joelarueya</h3>
							</div>
							<div
								className="panel"
								style={{
									backgroundImage: `url(${features[index].item[2]?.image})`,
								}}>
								<h3>...joelarueya</h3>
							</div>
							<div
								className="panel"
								style={{
									backgroundImage: `url(${features[index].item[3]?.image})`,
								}}>
								<h3>...joelarueya</h3>
							</div>
							<div
								className="panel"
								style={{
									backgroundImage: `url(${features[index].item[4]?.image})`,
								}}>
								<h3>...joelarueya</h3>
							</div>
							<div
								className="panel"
								style={{
									backgroundImage: `url(${features[index].item[5]?.image})`,
								}}>
								<h3>...joelarueya</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			{modal && modalData.length > 0 && (
				<div className="absolute bg-[rgba(0,0,0,0.8)] w-full md:h-full h-[screen] z-20">
					<FaArrowAltCircleLeft
						className="left-arrow left-0 md:left-[20%]"
						onClick={prevSlide}
					/>
					<FaArrowAltCircleRight
						className="right-arrow right-0 md:right-[20%]"
						onClick={nextSlide}
					/>
					<div className="slider">
						{modalData.map((item, idx) => (
							<div
								key={idx}
								className={idx === current ? 'slide active' : 'slide'}>
								{idx === current && (
									<div className="image">
										<img src={item.image} alt={item.name} />
										<span className="absolute text-gray-600 right-6 italic text-[10px]">
											joelarueyastudio
										</span>
									</div>
								)}
							</div>
						))}
						<span
							onClick={() => setModal(false)}
							className="absolute hover:cursor-pointer top-10 md:top-[30%] right-0 px-5 italic text-lg bg-blur">
							close
						</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default Feat
