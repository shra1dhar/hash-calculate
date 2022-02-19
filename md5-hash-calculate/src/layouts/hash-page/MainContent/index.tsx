import React from 'react'
import About from './Details/About'
import Intro from './Details/Intro'
import FormContent from './FormContent'
import styles from './styles.module.scss'
import Advantages from './Details/Advantages'
import HorizontalLongAd from '../../../components/Ads/Desktop/HorizontalLong'
import { useCryptoData } from '../../../store/Crypto-Context'

const MainContent = () => {
	const { main } = useCryptoData()

	return (
		<main className={styles.mainContent}>
			<div className={styles.innerContent}>
				<h1 className={styles.heading}>{main.heading}</h1>
				<FormContent />
				<br />
				<HorizontalLongAd />
				<Intro />
				<About />
				<Advantages />
			</div>
		</main>
	)
}

export default MainContent
