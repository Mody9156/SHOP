import { useState, useEffect } from 'react'
import '../styles/Footer.css'

function Footer({ cart }) {
	const [inputValue, setInputValue] = useState('')
	// useEffect(() => {
	// 	console.log("It's good job with your brother")
	// })
	// useEffect(() => {
	// 	console.log("It's good job with your brother")
	// }, [])
	// useEffect(() => {
	// 	console.log("It's good job with your brother")
	// }, [cart])
	// useEffect(() => {
	// 	return (() => {
	// 		console.log("It's good job with your brother")

	// 	})
	// })


	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
