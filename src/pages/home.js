import React from 'react'
import Layout from '../components/shared/Layout'
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'
import Feat from '../components/Feat'
import ShortAbout from '../components/ShortAbout'

const Home = function () {
	return (
		<>
			<Helmet>
				<title>Joel Arueya Studio</title>
			</Helmet>

			<div className="home">
				<Layout>
					<div className="h-[85vh]">
						<Banner />
						<ShortAbout />
					</div>
					<Feat />
				</Layout>
			</div>
		</>
	)
}

export default Home
