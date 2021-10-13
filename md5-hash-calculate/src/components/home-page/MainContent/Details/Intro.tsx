import React from 'react'
import styles from '../styles.module.scss'

const Intro = () => {
	return (
		<section className={styles.intro} id="intro">
			<h3>MD5 hash Generator</h3>
			<p>
				MD5 hash calculate gives you online MD5 generated hash values. It uses MD5 algorithm to calculate MD5 hash. The
				MD5 hash is calculated in real time. It can be clicked and copied easily.
			</p>
			<p>You can verify the checksum also by pasting your string in the textbox.</p>
		</section>
	)
}

export default Intro
