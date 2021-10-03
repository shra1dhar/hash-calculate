import React from 'react'
import styles from '../styles.module.scss'

const About = () => {
	return (
		<section className={styles.about} id="about">
			<h3>What is MD5 ?</h3>
			<p>
				Message Digest Algorithm 5 (MD5) is a cryptographic hash algorithm that can be used to create a 128-bit string
				value from an arbitrary length string. Although there has been insecurities identified with MD5, it is still
				widely used. MD5 is most commonly used to verify the integrity of files. However, it is also used in other
				security protocols and applications such as SSH, SSL, and IPSec.
			</p>
			<p>
				The MD5 hash function was originally designed for use as a secure cryptographic hash algorithm for
				authenticating digital signatures. But MD5 has been deprecated for uses other than as a noncryptographic
				checksum to verify data integrity and detect unintentional data corruption.
			</p>
		</section>
	)
}

export default About
