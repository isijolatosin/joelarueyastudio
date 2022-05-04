import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { BsHandbagFill } from 'react-icons/bs'
import { BsHandbag } from 'react-icons/bs'
import { selectItemCount, selectTotal } from '../slices/appSlices'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import { UserContext } from '../context/user-context'

const Nav = function () {
	const { user } = useContext(UserContext)
	const [active, setActive] = React.useState('')
	const itemCount = useSelector(selectItemCount)
	const total = useSelector(selectTotal)
	const navigate = useNavigate()
	const navLinks = [
		{
			id: 1,
			navName: 'home',
			link: '/',
		},
		{
			id: 2,
			navName: 'about-joelarueyastudio',
			link: '/about-joelarueyastudio',
		},
		{
			id: 3,
			navName: 'contact-joelarueyastudio',
			link: '/contact-joelarueyastudio',
		},
		{
			id: 4,
			navName: 'art-gallery',
			link: '/art-gallery/joelarueyastudio',
		},
	]

	React.useEffect(() => {
		const pathArr = window?.location?.pathname.split('/').filter((x) => x)
		// eslint-disable-next-line array-callback-return
		navLinks.map((itm) => {
			if (pathArr?.[0] === itm.navName) {
				setActive(pathArr?.[0]) || setActive(itm.navName)
			}
			if (window.location.pathname === '/') {
				setActive('home')
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active])

	const handleSignOut = () => {
		auth.signOut()
		navigate('/')
	}

	return (
		<div>
			<div className="flex items-center justify-between shadow-lg px-5 pb-2 fixed z-40 w-full pt-1 md:w-[85%] mt-[-55px] md:mt-[-10px] md:h-[50px] bg-white">
				<Logo />
				<div className="hidden md:inline navStyle">
					{navLinks.map((nav) => (
						<Link
							onClick={() => setActive(nav.navName)}
							className={`mx-3 ${
								active === nav.navName
									? 'text-blue-900 font-bold'
									: 'text-gray-400'
							} hover:text-gray-400 uppercase ease duration-300 text-[11px] navStyleChild`}
							key={nav.id}
							to={nav.link}>
							{nav.navName}
						</Link>
					))}
				</div>
				<div className="flex items-center">
					<div className="flex items-center">
						{total > 0 && (
							<span className="text-xs font-bold -mr-4">${total}</span>
						)}
						<Link
							to={`/checkout/${user?.displayName}`}
							className="flex items-center justify-between">
							<div
								className={
									itemCount > 0
										? 'ml-5 bg-neutral-200 p-2 rounded-full'
										: 'ml-5'
								}>
								<div className="relative">
									{itemCount < 1 ? <BsHandbag /> : <BsHandbagFill />}
									{itemCount > 0 && (
										<div className="absolute bg-blue-900 text-black w-[20px] h-[20px] text-xs -top-4 -right-4 rounded-full flex items-center justify-center">
											<span>{itemCount}</span>
										</div>
									)}
								</div>
							</div>
						</Link>
					</div>
					<div className="text-xs text-blue-900 ml-5">
						{!user ? (
							<span
								className="hover:cursor-pointer navStyleChild"
								onClick={() => navigate('/sign-in')}>
								Sign In
							</span>
						) : (
							<span
								className="hover:cursor-pointer navStyleChild"
								onClick={handleSignOut}>
								{' '}
								Sign Out
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="md:hidden w-[100%] mx-auto flex mt-5 justify-between">
				{navLinks.map((nav) => (
					<Link
						onClick={() => setActive(nav.navName)}
						className={`mx-3 ${
							active === nav.navName
								? 'text-blue-900 font-bold'
								: 'text-gray-400'
						} hover:text-gray-400 px-3 uppercase ease duration-300 text-[8.8px]`}
						key={nav.id}
						to={nav.link}>
						{nav.navName === 'home' && 'home'}
						{nav.navName === 'about-joelarueyastudio' && 'about'}
						{nav.navName === 'contact-joelarueyastudio' && 'contact'}
						{nav.navName === 'art-gallery' && 'gallery'}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Nav
