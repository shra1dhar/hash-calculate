import React from 'react'
import { useCryptoData } from '../../../store/Crypto-Context'
import styles from '../styles.module.scss'

const Navbar = () => {
	const { navbar } = useCryptoData()

	return (
		<header className={styles.navContainer}>
			<div className={styles.nav}>
				<div>
					<h3>{navbar.title}</h3>
				</div>
				<div>
					<a href="#about">About</a>
				</div>
			</div>
		</header>
	)
}

export default Navbar
