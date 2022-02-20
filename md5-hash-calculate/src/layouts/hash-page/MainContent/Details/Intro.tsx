import React from 'react'
import { useCryptoData } from '../../../../store/Crypto-Context'
import styles from '../styles.module.scss'

const Intro = () => {
	const {
		overview: { title, body },
	} = useCryptoData()

	return (
		<section className={styles.intro} id="intro">
			<h3>{title}</h3>
			{body.map((val, idx) => (
				<p key={idx}>{val}</p>
			))}
		</section>
	)
}

export default Intro
