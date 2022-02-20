import React from 'react'
import styles from '../styles.module.scss'
import { useCryptoData } from '../../../../store/Crypto-Context'

const About = () => {
	const {
		whatOfIt: { title, body },
	} = useCryptoData()

	return (
		<section className={styles.about} id="about">
			<h3>{title}</h3>
			{body.map((val, idx) => (
				<p key={idx}>{val}</p>
			))}
		</section>
	)
}

export default About
