function Button(props) {
	return (
		<button
			disabled={props.isDisabled}
			onClick={props.handleFunc}
			type={props.type}
			className={
				props.type === 'large'
					? 'bg-black text-xs text-yellow-500 py-2 max-w-[120px] px-5 rounded-xl mt-5 font-light hover:bg-gray-600 ease-in duration-300 shadow-xl shadow-neutral-700'
					: props.type === 'medium'
					? 'bg-yellow-600 text-xs text-black py-2 max-w-[120px] font-bold mt-5 px-5 hover:bg-yellow-900 hover:text-white ease-in duration-300 shadow-lg shadow-gray-800 rounded-bl-xl'
					: 'bg-black text-xs text-yellow-500 py-2 max-w-[120px] px-2 rounded-xl mt-5 font-light hover:bg-gray-600 ease-in duration-300 shadow-xl shadow-neutral-700'
			}>
			{props.children}
		</button>
	)
}
export default Button
