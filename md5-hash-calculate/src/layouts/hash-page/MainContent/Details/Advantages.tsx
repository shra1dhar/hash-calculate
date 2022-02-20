import React from 'react'
import { useCryptoData } from '../../../../store/Crypto-Context'
import styles from '../styles.module.scss'

const Advantages = () => {
	const {
		advantages: { title, body },
	} = useCryptoData()

	return (
		<section className={styles.advantages}>
			<h3>{title}</h3>
			<ul>
				{body.map((val, idx) => (
					<li key={idx}>{val}</li>
				))}
			</ul>
		</section>
	)
}

export default Advantages
