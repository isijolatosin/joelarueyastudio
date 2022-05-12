import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { BsHandbagFill } from 'react-icons/bs'
import { CgMenuRight } from 'react-icons/cg'
import { BsHandbag } from 'react-icons/bs'
import { selectItemCount, selectTotal } from '../slices/appSlices'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import { UserContext } from '../context/user-context'

const Nav = function () {
	const { user } = useContext(UserContext)
	const [menu, setMenu] = React.useState(false)
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
			<div className="flex items-center justify-between shadow-2xl px-5 pb-2 z-40 w-full pt-16 md:pt-10 md:w-[100%] mt-[-55px] md:mt-[-10px] md:h-[70px]">
				<Logo />
				<div className="hidden md:flex md:flex-row md:justify-between md:w-[50%] navStyle">
					{navLinks.map((nav) => (
						<Link
							onClick={() => setActive(nav.navName)}
							className={`mx-3 ${
								active === nav.navName
									? 'text-yellow-500 font-bold'
									: 'text-gray-50'
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
							<span className="text-xs font-bold -mr-4">
								${!Number.isInteger(total) ? total : `${total}.00`}
							</span>
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
									{itemCount < 1 ? (
										<BsHandbag className="text-gray-50" />
									) : (
										<BsHandbagFill className="text-gray-50" />
									)}
									{itemCount > 0 && (
										<div className="absolute bg-cyan-900 text-white w-[20px] h-[20px] text-xs -top-4 -right-4 rounded-full flex items-center justify-center">
											<span>{itemCount}</span>
										</div>
									)}
								</div>
							</div>
						</Link>
					</div>
					<div
						onClick={() => setMenu(!menu)}
						className="md:hidden ml-5 text-gray-50 text-xl">
						<CgMenuRight />
					</div>
					<div className="text-xs text-gray-50 ml-5">
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
			<div
				className={`${
					menu ? 'plumpMenuClick' : 'plumpMenu'
				} plumpMenu md:hidden bg-blur2 z-40`}>
				{navLinks.map((nav) => (
					<Link
						onClick={() => setActive(nav.navName)}
						className={`mx-3 text-[14px] mb-7 p-1 ${
							active === nav.navName
								? 'text-yellow-500 font-bold'
								: 'text-neutral-300'
						} hover:text-gray-400 px-3 uppercase ease duration-300`}
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
