import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import NotFound from './pages/error'
import Management from './pages/management'
import Login from './pages/login'
import Register from './pages/register'
import Canceled from './pages/canceled'
import Success from './pages/success'
import Buy from './pages/buy'

function App() {
	return (
		<Routes>
			<Route exact path="/about-joelarueyastudio" element={<About />} />
			<Route exact path="/contact-joelarueyastudio" element={<Contact />} />
			<Route
				exact
				path="/art-gallery/:joelarueyastudio"
				element={<Gallery />}
			/>
			<Route exact path="/success" element={<Success />} />
			<Route exact path="/canceled" element={<Canceled />} />
			<Route exact path="/management" element={<Management />} />
			<Route exact path="/purchasing/:product" element={<Buy />} />
			<Route exact path="/sign-in" element={<Login />} />
			<Route exact path="/sign-up" element={<Register />} />
			<Route exact path="*" element={<NotFound />} />
			<Route exact path="/" element={<Home />} />
		</Routes>
	)
}

export default App
