import React, { useContext } from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user-context'

export default function App({ product, address }) {
	const navigate = useNavigate()
	const { user } = useContext(UserContext)
	const [config, setConfig] = React.useState()
	const [trans_id, setTrans_id] = React.useState('')
	const [alert, setAlert] = React.useState(false)
	const [emailError, setEmailError] = React.useState(false)

	const handleBuy = () => {
		if (
			address?.street === '' &&
			address?.state === '' &&
			address?.country === ''
		) {
			setAlert(true)
		} else {
			const config = {
				public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
				tx_ref: Date.now(),
				amount: product?.price,
				currency: 'NGN',
				payment_options: 'card,mobilemoney,ussd',
				customer: {
					email: user?.email,
					phonenumber: user?.Phone,
					name: user?.displayName,
				},
				customizations: {
					title: 'Joelarueyastudio',
					description: product?.description,
					logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
				},
			}
			setConfig(config)
		}

		handleFlutterPayment({
			callback: (response) => {
				// console.log(response)
				setTrans_id(response?.transaction_id)
				closePaymentModal() // this will close the modal programmatically
			},
			onClose: () => {},
		})
	}

	const handleFlutterPayment = useFlutterwave(config)

	const boughtProduct = {
		description: product?.description,
		length: product?.length,
		name: product?.name,
		price: product?.price,
		series: product?.series,
		_id: product?._id,
		quantity: 1,
	}
	React.useEffect(() => {
		if (trans_id !== '') {
			localStorage.setItem('transId', trans_id)
			localStorage.setItem('product', JSON.stringify(boughtProduct))
			navigate('/success')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trans_id])

	return (
		<div className="mt-2">
			{alert && (
				<div className="text-center">
					<span className="text-red-800 text-xs capitalize">
						Please provide your contact address
					</span>
				</div>
			)}
			{emailError && (
				<div className="text-center">
					<span className="text-red-800 text-xs capitalize">
						Please provide your email address
					</span>
				</div>
			)}
			<button
				className="w-[100%] rounded-b-lg bg-gray-900 hover:bg-gray-600 h-[50px] ease duration-300 text-white"
				onClick={
					user?.email || address?.email ? handleBuy : () => setEmailError(true)
				}>
				Pay now
			</button>
		</div>
	)
}
