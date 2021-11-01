import React from 'react'
import styles from '../styles.module.scss'

const About = () => {
	return (
		<section className={styles.about} id="about">
			<h3>What is MD5 ?</h3>
			<p>
				MD5 is a cryptographic hash algorithm that can be used to create a 128-bit string. Despite the known
				vulnerabilities MD5 is still popular. MD5 can be used to check integrity between files and string (text). It
				also has applications in security protocols like SSH, SSL, and IPSec.
			</p>
			<p>
				Initially, MD5 hash calculating function was developed for use as a secure cryptographic hash algorithm for
				authenticating digital signatures. Lately MD5 has been deprecated. Other cryptographic functions like Sha1 are
				now gaining traction.
			</p>
		</section>
	)
}

export default About
