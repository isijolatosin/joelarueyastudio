import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { GoAlert } from 'react-icons/go'
import { db } from '../firebase'
import Layout from '../components/shared/Layout'
import { UserContext } from '../context/user-context'
import Button from '../components/shared/Button'
import { AUTHORIZED_ID } from '../constant'

const Success = () => {
	const { user } = useContext(UserContext)
	const navigate = useNavigate()

	const { displayName } = user
	const userAddress = localStorage.getItem('address')
	const product = JSON.parse(localStorage.getItem('product'))
	const transId = localStorage.getItem('transId')

	React.useEffect(() => {
		user?.email &&
			product?.length !== 0 &&
			transId &&
			db
				.collection('purchased')
				.doc(`${user?.email}/`)
				.collection('shoppings')
				.add({
					id: product._id,
					title: product.name,
					description: product.description,
					quantity: product.quantity,
					price: product.price,
					address: userAddress,
					customer: user?.displayName,
					email: user?.email,
				})
				.then(() => {
					// console.log(`SUCCESSFULL`)
				})
				.catch((error) => console.log('Error' + error.message))

		// admin path
		db.collection('admin')
			.doc(`${AUTHORIZED_ID.id_one}/`)
			.collection('all-purchased')
			.add({
				id: product._id,
				title: product.name,
				description: product.description,
				quantity: product.quantity,
				price: product.price,
				address: userAddress,
				customer: user?.displayName,
				email: user?.email,
			})
			.then(() => {
				console.log(`SUCCESSFULL`)
			})
			.catch((error) => console.log('Error' + error.message))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleBackToShopping = () => {
		localStorage.setItem('address', null)
		localStorage.setItem('transId', null)
		localStorage.setItem('product', null)
		localStorage.setItem('purchaseData', null)
		navigate('/')
	}

	return (
		<div className="home">
			<Helmet>
				<title>Joel Arueya Studio: SUCCESS-PAGE</title>
			</Helmet>
			<Layout>
				{transId ? (
					<div className="pt-[50px] mt-[100%] bg-neutral-200 lg:mt-[29.8%] flex flex-col items-center">
						<h1 className="text-md text-neutral-600 uppercase mb-1">{`Hey ${displayName}`}</h1>
						<h1 className="text-xl uppercase">Thank you for your purchase</h1>
						<div className="mt-10 text-neutral-600 font-light text-center">
							<span>
								We are currently processing your order and will send you a
								confirmation email shortly
							</span>
						</div>
						<div className="my-10">
							<Button handleFunc={handleBackToShopping}>
								Continue Shopping
							</Button>
						</div>
					</div>
				) : (
					<div className="text-red-700 flex flex-col items-center justify-center my-10 uppercase font-bold">
						<GoAlert className="mr-5 text-3xl mb-5" />
						You do not have any transactions
					</div>
				)}
			</Layout>
		</div>
	)
}

export default Success
