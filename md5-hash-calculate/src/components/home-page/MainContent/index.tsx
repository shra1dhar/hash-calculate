import React from 'react'
import About from './Details/About'
import Advantages from './Details/Advantages'
import FormContent from './FormContent'
import styles from './styles.module.scss'

const MainContent = () => {
	return (
		<main className={styles.mainContent}>
			<div className={styles.innerContent}>
				<h1 className={styles.heading}>Fast Online hashing using MD5 algorithm ⚡️</h1>
				<FormContent />
				<About />
				<Advantages />
			</div>
		</main>
	)
}

export default MainContent
