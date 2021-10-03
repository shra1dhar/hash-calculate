import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
	return (
		<footer className={styles.foot}>
			<div className={styles.innerFooter}>
				<h5>Further links</h5>

				<ol>
					<li>
						<a href="https://en.wikipedia.org/wiki/MD5" rel="noreferrer noopener">
							Wiki link
						</a>
					</li>
				</ol>
			</div>
		</footer>
	)
}

export default Footer
