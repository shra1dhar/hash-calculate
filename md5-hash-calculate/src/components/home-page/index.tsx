import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import styles from './styles.module.scss'
import Footer from './Footer'

const HomePage = () => {
	return (
		<div className={styles.home}>
			<Navbar />
			<MainContent />
			<Footer />
		</div>
	)
}

export default HomePage
