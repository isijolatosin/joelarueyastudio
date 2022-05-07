import React from 'react'
import { RiSearch2Fill } from 'react-icons/ri'
import { RiSearch2Line } from 'react-icons/ri'

const Search = ({
	onChange,
	search,
	onSearch,
	data,
	setIsNotSearch,
	setSearchData,
}) => {
	function Reset() {
		setIsNotSearch(false)
		setSearchData([])
	}
	return (
		<form
			className="relative w-[80%] lg:w-[50%] mt-10 flex items-center"
			onSubmit={onSearch}>
			<div className="flex rounded-full items-center bg-blur2  h-[30px] w-[100%]">
				<input
					type="text"
					onChange={onChange}
					value={search}
					name="search"
					placeholder="Search..."
					className="focus:ring-0 w-full h-full text-sm bg-transparent border-0 text-white placeholder-white font-light"
				/>
				<div className="flex pr-3">
					<span className="text-[10px] text-white font-light italic border-l-[1px] pl-3">
						joelarueyastudio
					</span>
					{data.length > 0 && (
						<span
							onClick={Reset}
							className="hover:cursor-pointer hover:text-cyan-900 text-[10px] text-yellow-600 font-light ml-3 ease duration-300 border-l-[1px] pl-3">
							Reset
						</span>
					)}
				</div>
				{data?.length ? (
					<div className=" rounded-r-full h-full flex flex-row items-center bg-yellow-600">
						<RiSearch2Fill
							className="text-white w-[40px] hover:cursor-pointer"
							onClick={onSearch}
						/>
					</div>
				) : (
					<div className=" rounded-r-full h-full flex flex-row items-center bg-yellow-600">
						<RiSearch2Line
							className="text-white w-[40px] justify-center hover:cursor-pointer"
							onClick={onSearch}
						/>
					</div>
				)}
			</div>
		</form>
	)
}

export default Search
