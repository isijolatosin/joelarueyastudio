import React from 'react'
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'
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
		{ item: dance.slice(0, 3), id: 1, name: 'dance' },
		{ item: boldness.slice(0, 3), id: 2, name: 'boldness' },
		{ item: consume.slice(0, 3), id: 3, name: 'consume' },
	]

	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="flex flex-col w-full items-center bg-[rgba(255,255,255,1)] pb-10 pt-5 mt-10 md:pt-32">
				<h1 className="text-gray-700 text-lg md:text-2xl font-bold mb-7">
					FEATURED ART WORKS
				</h1>
				<div className="catBg w-full md:w-[50%] px-5 md:px-10 py-5 md:rounded-full flex items-center justify-between">
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
						<div className="front text-white flex items-center justify-center text-xl">
							<BsSearch />
							<p className="text-[10px] ml-1 font-light">Gallery</p>
						</div>
						<div className="back  mt-0">
							<span className="text-black">{features[index]?.name}</span>
						</div>
					</div>
				</div>
				<div className="w-full mt-10 flex flex-col items-center">
					<div className="mb-5">
						<span className="text-3xl capitalize">{features[index]?.name}</span>
					</div>
					<div className="w-[90%] md:w-[80%] mb-[50px]">
						<div>
							<img
								src={features[index].item[0]?.image}
								alt={features[index].item[0]?.name}
								className="w-[400px] h-[300px] float-left aspect-[1/1] lg:aspect-[1/2] shadow-lg object-cover object-center mb-0 mr-3 [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] lg:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
							/>
							<span className="w-[50%]">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable. If you are going to use a passage of Lorem
								Ipsum, you need to be sure there isn't anything embarrassing
								hidden in the middle of text. All the Lorem Ipsum generators on
								the Internet tend to repeat predefined chunks as necessary,
								making this the first true generator on the Internet. It uses a
								dictionary of over 200 Latin words, combined with a handful of
								model sentence structures, to generate Lorem Ipsum which looks
								reasonable. The generated Lorem Ipsum is therefore always free
								from repetition, injected humour, or non-characteristic words
								etc.
							</span>
						</div>
					</div>
					<div className="w-[90%] md:w-[80%] mb-[50px]">
						<div>
							<img
								src={features[index].item[1]?.image}
								alt={features[index].item[1]?.name}
								className="w-[400px] h-[300px] float-right aspect-[1/1] lg:aspect-[1/2] shadow-lg object-cover object-center mb-0 ml-3 [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] lg:[--my-shape:polygon(0%_0%,100%_0%,100%_100%,25%_100%)]"
							/>
							<span className="w-[50%]">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable. If you are going to use a passage of Lorem
								Ipsum, you need to be sure there isn't anything embarrassing
								hidden in the middle of text. All the Lorem Ipsum generators on
								the Internet tend to repeat predefined chunks as necessary,
								making this the first true generator on the Internet. It uses a
								dictionary of over 200 Latin words, combined with a handful of
								model sentence structures, to generate Lorem Ipsum which looks
								reasonable. The generated Lorem Ipsum is therefore always free
								from repetition, injected humour, or non-characteristic words
								etc.
							</span>
						</div>
					</div>
					<div className="w-[90%] md:w-[80%] mb-[50px]">
						<div>
							<img
								src={features[index].item[2]?.image}
								alt={features[index].item[2]?.name}
								className="w-[400px] h-[300px] float-left aspect-[1/1] lg:aspect-[1/2] shadow-lg object-cover object-center mb-0 mr-3 [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] lg:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
							/>
							<span className="w-[50%]">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable. If you are going to use a passage of Lorem
								Ipsum, you need to be sure there isn't anything embarrassing
								hidden in the middle of text. All the Lorem Ipsum generators on
								the Internet tend to repeat predefined chunks as necessary,
								making this the first true generator on the Internet. It uses a
								dictionary of over 200 Latin words, combined with a handful of
								model sentence structures, to generate Lorem Ipsum which looks
								reasonable. The generated Lorem Ipsum is therefore always free
								from repetition, injected humour, or non-characteristic words
								etc.
							</span>
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
