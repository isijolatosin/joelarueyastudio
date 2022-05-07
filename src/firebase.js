import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDMpphfwPa21CtWJbVzp94bavfQb87kncI',
	authDomain: 'joel-3ce9c.firebaseapp.com',
	projectId: 'joel-3ce9c',
	storageBucket: 'joel-3ce9c.appspot.com',
	messagingSenderId: '584154618761',
	appId: '1:584154618761:web:3f508e2a144b8d26b49f58',
	measurementId: 'G-YCT5HYSL3D',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

async function createUserProfileDocument(userAuth, additionalData) {
	if (!userAuth) {
		return
	}
	const userRef = db.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef
}
export { db, storage, auth, createUserProfileDocument, firebase as default }
