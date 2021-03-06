import React, { useContext } from 'react'
import { FaArtstation } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RiGitRepositoryPrivateFill } from 'react-icons/ri'
import { UserContext } from '../context/user-context'
import { AUTHORIZED_ID } from '../constant'

const Logo = function () {
	const { user } = useContext(UserContext)
	return (
		<div className="flex items-center justify center">
			<Link to="/" className="flex items-center">
				<FaArtstation className="text-neutral-50 mr-2 w-[30px] h-[30px]" />
				<span className="text-gray-50 font-light navStyleChild">
					Joelarueyastudio
				</span>
			</Link>
			{(user?.email === AUTHORIZED_ID.id_one ||
				user?.email === AUTHORIZED_ID.id_two) && (
				<Link to="/management">
					<RiGitRepositoryPrivateFill className="text-cyan-900 p-[7px] ml-3 rounded-full w-[35px] h-[35px] shadow-lg" />
				</Link>
			)}
		</div>
	)
}

export default Logo
