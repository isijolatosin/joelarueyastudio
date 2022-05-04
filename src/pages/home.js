import React from 'react'
import Layout from '../components/shared/Layout'
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import ShortAbout from '../components/ShortAbout'

const Home = function () {
	return (
		<>
			<Helmet>
				<title>Joel Art Gallery</title>
			</Helmet>

			<Layout>
				<div className="home">
					<Banner />
					<ShortAbout />
					<Featured />
				</div>
			</Layout>
		</>
	)
}

export default Home
