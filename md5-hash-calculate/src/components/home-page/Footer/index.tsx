import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
	return (
		<footer className={styles.foot}>
			<div className={styles.innerFooter}>
				<small>Copyright &copy; 2021, Hash Calculator</small>

				{/* <ol>
					<li>
						<a href="https://en.wikipedia.org/wiki/MD5" rel="noreferrer noopener">
							Wiki link
						</a>
					</li>
				</ol> */}
			</div>
		</footer>
	)
}

export default Footer
