import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user-context'
import axios from 'axios'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'

export default function App({ product, address }) {
	const navigate = useNavigate()
	const { user } = useContext(UserContext)
	const [config, setConfig] = React.useState()
	const [trans_id, setTrans_id] = React.useState('')
	const [alert, setAlert] = React.useState(false)
	const [emailError, setEmailError] = React.useState(false)

	const handleBuy = async () => {
		if (
			address?.street === '' &&
			address?.state === '' &&
			address?.country === ''
		) {
			setAlert(true)
		} else {
			const userName = user?.displayName
			const userPhone = user?.Phone
			const userEmail = user?.email || address?.email
			try {
				const { data } = await axios.post(
					'/.netlify/functions/create-payment-intent',
					JSON.stringify({ product, userName, userPhone, userEmail })
				)
				setConfig(data.result)

				handleFlutterPayment({
					callback: (response) => {
						// console.log(response)
						setTrans_id(response?.transaction_id)
						closePaymentModal() // this will close the modal programmatically
					},
					onClose: () => {},
				})
			} catch (error) {
				console.log(error)
				// error && navigate('/canceled')
			}

			const userAddress =
				address?.street + ', ' + address?.state + '. ' + address?.country
			localStorage.setItem('address', userAddress)
		}
	}
	const handleFlutterPayment = useFlutterwave(config && config)

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
				className="w-[100%] bg-gray-400 hover:bg-gray-600 text-white h-[50px] ease duration-300 rounded-b-lg"
				onClick={
					user?.email || address?.email ? handleBuy : () => setEmailError(true)
				}>
				Pay now
			</button>
		</div>
	)
}
