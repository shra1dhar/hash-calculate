import React from 'react'
import styles from '../styles.module.scss'

const Navbar = () => {
	return (
		<header className={styles.navContainer}>
			<div className={styles.nav}>
				<div>
					<h3>MD5 Hash</h3>
				</div>
				<div>
					<a href="#about">About</a>
				</div>
			</div>
		</header>
	)
}

export default Navbar
