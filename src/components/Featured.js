import React from 'react'
import { AiOutlineExpand } from 'react-icons/ai'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import data from '../files.json'

function Featured() {
	const [current, setCurrent] = React.useState(0)
	const [modal, setModal] = React.useState(false)
	const length = data.files.length

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
		setCurrent(val)
		setModal(true)
	}

	return (
		<div className="relative flex flex-col items-center w-full">
			<p className="w-[40%] font-light text-center text-sm py-10">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
			</p>
			<div className="flex flex-col w-full items-center">
				<h1 className="text-gray-600 mb-7">FEATURED ART WORKS</h1>
				<div className="container">
					<div className="image-gallery">
						<div className="img-1">
							<AiOutlineExpand
								onClick={() => handleOpenModal(0)}
								className="icon"
							/>
						</div>
						<div className="img-2">
							<AiOutlineExpand
								onClick={() => handleOpenModal(1)}
								className="icon"
							/>
						</div>
						<div className="img-3">
							<AiOutlineExpand
								onClick={() => handleOpenModal(2)}
								className="icon"
							/>
						</div>
						<div className="img-4">
							<AiOutlineExpand
								onClick={() => handleOpenModal(3)}
								className="icon"
							/>
						</div>
						<div className="img-5">
							<AiOutlineExpand
								onClick={() => handleOpenModal(4)}
								className="icon"
							/>
						</div>
						<div className="img-6">
							<AiOutlineExpand
								onClick={() => handleOpenModal(5)}
								className="icon"
							/>
						</div>
						<div className="img-7">
							<AiOutlineExpand
								onClick={() => handleOpenModal(6)}
								className="icon"
							/>
						</div>
						<div className="img-8">
							<AiOutlineExpand
								onClick={() => handleOpenModal(7)}
								className="icon"
							/>
						</div>
						<div className="img-9">
							<AiOutlineExpand
								onClick={() => handleOpenModal(8)}
								className="icon"
							/>
						</div>
						<div className="img-10">
							<AiOutlineExpand
								onClick={() => handleOpenModal(9)}
								className="icon"
							/>
						</div>
						<div className="img-11">
							<AiOutlineExpand
								onClick={() => handleOpenModal(10)}
								className="icon"
							/>
						</div>
					</div>
				</div>
			</div>
			{modal && (
				<div className="absolute bg-[rgba(0,0,0,0.8)] w-full h-full z-20">
					<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
					<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
					<div className="slider">
						{data?.files.map((item, idx) => (
							<div
								key={idx}
								className={idx === current ? 'slide active' : 'slide'}>
								{idx === current && (
									<img src={item.src} alt={`data-${idx}`} className="image" />
								)}
							</div>
						))}
						<span
							onClick={() => setModal(false)}
							className="absolute hover:cursor-pointer top-[30%] right-0 px-5 italic text-lg bg-blur">
							close
						</span>
						<span className="absolute bottom-[110px] italic text-xs">
							joelarueyastudio
						</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default Featured
