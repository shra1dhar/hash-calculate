import React from 'react'
import Bubble from '../../components/Bubble'
import styles from './styles.module.scss'

const HomePage = () => {
	return (
		<div className={styles.bgMain}>
			<div className={styles.glass}>
				<div className={styles.heading}>
					<h2 className={styles.head}>Hash Tools</h2>
				</div>

				<div className={styles.bubble_container}>
					<div className={styles.bubble_centered}>
						<Bubble name="MD5" href="/md5" />
					</div>
					<div className={styles.bubble_evenly}>
						<Bubble name="HMAC" href="/hmac" />
						<Bubble name="SHA256" href="/sha256" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
