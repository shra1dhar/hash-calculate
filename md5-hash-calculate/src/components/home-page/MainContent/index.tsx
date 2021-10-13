import React from 'react'
import About from './Details/About'
import Intro from './Details/Intro'
import FormContent from './FormContent'
import styles from './styles.module.scss'
import Advantages from './Details/Advantages'

const MainContent = () => {
	return (
		<main className={styles.mainContent}>
			<div className={styles.innerContent}>
				<h1 className={styles.heading}>Online MD5 hash calculator ⚡️</h1>
				<FormContent />
				<Intro />
				<About />
				<Advantages />
			</div>
		</main>
	)
}

export default MainContent
