import React from 'react'
import styles from '../styles.module.scss'

const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<h3>Advantages of MD5</h3>
			<ul>
				<li>MD5 algorithm gives small 32 letter string which can be used as a unique value.</li>
				<li>MD5 is used to store passwords in 128-bit form in some UNIX based systems.</li>
				<li>MD5 can be used to verify the checksum easily. This allows to check integrity.</li>
			</ul>
		</section>
	)
}

export default Advantages
