import Footer from '../Footer'
import Nav from '../Nav'

function Layout({ children }) {
	return (
		<div className="w-[100%] lg:w-[100%] mx-auto justify-center">
			<Nav />
			<div className="lg:p-0">{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
