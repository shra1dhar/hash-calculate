import React from 'react'
import About from './Details/About'
import Intro from './Details/Intro'
import FormContent from './FormContent'
import styles from './styles.module.scss'
import Advantages from './Details/Advantages'
import HorizontalLongAd from '../../Ads/Desktop/HorizontalLong'

const MainContent = () => {
	return (
		<main className={styles.mainContent}>
			<div className={styles.innerContent}>
				<h1 className={styles.heading}>MD5 Hash Calculate ⚡️</h1>
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
