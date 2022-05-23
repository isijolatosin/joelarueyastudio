require('dotenv').config()

// domain/.netlify/functions/create-payment-intent
exports.handler = async function (event, context) {
	const { product, userName, userPhone, userEmail } = JSON.parse(event.body)

	try {
		const config = {
			public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
			tx_ref: Date.now(),
			amount: product?.price,
			currency: 'NGN',
			payment_options: 'card,mobilemoney,ussd',
			customer: {
				email: userEmail,
				phonenumber: userPhone,
				name: userName,
			},
			customizations: {
				title: 'Joelarueyastudio',
				description: product?.description,
				logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
			},
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ result: config }),
		}
	} catch (error) {
		return {
			statusCodes: 500,
			body: JSON.stringify({ msg: error.message }),
		}
	}
}
