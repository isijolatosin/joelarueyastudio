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
			<div className="flex flex-col w-full items-center bg-[rgba(255,255,255,1)] pt-20 md:pt-32 rounded-t-[50px]  md:rounded-t-[200px]">
				<h1 className="text-gray-700 text-lg md:text-2xl font-bold mb-7">
					FEATURED ART WORKS
				</h1>
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
						{data?.files.map((item, idx) => (
							<div
								key={idx}
								className={idx === current ? 'slide active' : 'slide'}>
								{idx === current && (
									<div className="image">
										<img src={item.src} alt={`data-${idx}`} />
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

export default Featured
