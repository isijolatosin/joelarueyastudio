import React from 'react'
import { RiSearch2Fill } from 'react-icons/ri'
import { RiSearch2Line } from 'react-icons/ri'

const Search = ({ onChange, search, onSearch, data }) => {
	return (
		<form
			className="w-[80%] lg:w-[40%] mt-10 flex items-center"
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
				<span className="text-[10px] text-white font-light italic mr-3 border-l-[1px] pl-3">
					joelarueyastudio
				</span>
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
