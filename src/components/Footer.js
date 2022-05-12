import React from 'react'
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

function Footer() {
	return (
		<div className="flex justify-center bg-neutral-200">
			<footer className="w-[80%] flex flex-col md:flex-row border-neutral-700 pb-[50px] py-5 justify-between items-center">
				<div className="flex flex-row md:flex-col mt-2 text-xs text-neutral-500 font-light">
					<div className="pr-5 border-r-2 border-r-neutral-800 md:flex">
						<p className="">
							&copy; {new Date().getUTCFullYear()} <span>joelarueyastudio</span>
						</p>
						<span>• All right reserved</span>
					</div>
					<div className="md:flex ml-5">
						<p className="mr-1">website develop by - </p>
						<p className="text-cyan-900 font-semibold ease-in duration-300 hover:text-gray-500 navStyleChild">
							<a
								href="https://www.linkedin.com/in/oluwatosin-isijola-33333ba8/"
								target="_blank"
								rel="noopener noreferrer">
								Tony Isijola
							</a>
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center w-[50%] md:w-[10%] mt-3">
					<a
						href="https://www.instagram.com/arueyajoel/"
						target="_blank"
						rel="noopener noreferrer">
						<FiInstagram className="mx-2 text-cyan-900 ease-in duration-300 hover:text-cyan-500 text-lg md:text-4xl" />
					</a>
					<a
						href="https://www.facebook.com/arueya.joel"
						target="_blank"
						rel="noopener noreferrer">
						<FiFacebook className="mx-2 text-cyan-900 ease-in duration-300 hover:text-cyan-500 text-lg md:text-4xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/oluwatosin-isijola-33333ba8/"
						target="_blank"
						rel="noopener noreferrer">
						<FiLinkedin className="mx-2 text-cyan-900 ease-in duration-300 hover:text-cyan-500 text-lg md:text-4xl" />
					</a>
				</div>
			</footer>
		</div>
	)
}

export default Footer
