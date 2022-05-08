import Footer from '../Footer'
import Nav from '../Nav'

function Layout({ children }) {
	return (
		<div className="w-[100%] lg:w-[85%] pb-[10px] mx-auto justify-center">
			<div className="pt-6 pb-2 md:px-6 lg:p-0">
				<Nav />
			</div>
			<div className="lg:p-0 my-[7px]">{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
