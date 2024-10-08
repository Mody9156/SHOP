import { useEffect, useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const saveItems = localStorage.getItem('data')
	const [cart, updateCart] = useState(saveItems ? JSON.parse(saveItems) : [])
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(cart))
	}, [cart])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			{/* <button onClick={() => getfooterwhow(!footer)}>Cacher !</button> */}

			<Footer cart={cart} />

		</div>
	)
}

export default App
