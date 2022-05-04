import React from 'react'
import Layout from '../components/shared/Layout'
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'
import Featured from '../components/Featured'

const Home = function () {
	return (
		<>
			<Helmet>
				<title>Joel Art Gallery</title>
			</Helmet>

			<Layout>
				<div className="home">
					<Banner />
					<Featured />
				</div>
			</Layout>
		</>
	)
}

export default Home
