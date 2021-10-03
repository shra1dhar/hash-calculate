import React from 'react'
import styles from '../styles.module.scss'

const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<h3>Advantages of MD5</h3>
			<ul>
				<li>
					MD5 algorithm is very much helpful as it is a bit easier for storing and comparing smaller hashes than the
					large text of variable length.
				</li>
				<li>They are used to store passwords in 128-bit form in UNIX.</li>
				<li>And it’s easy to develop a message digest from the original message.</li>
			</ul>
		</section>
	)
}

export default Advantages
