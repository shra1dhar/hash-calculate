import Link from 'next/link'
import React from 'react'
import { useCryptoData } from '../../../store/Crypto-Context'
import styles from '../styles.module.scss'

const Navbar = () => {
	const { navbar } = useCryptoData()

	return (
		<header className={styles.navContainer}>
			<div className={styles.nav}>
				<div className={styles.navElements}>
					<div className={styles.navTitle}>
						<Link href="/">
							<a>
								<h3>{navbar.title}</h3>
							</a>
						</Link>
					</div>
					<div className={styles.navLinks}>
						<Link href="/md5">
							<a>Md5</a>
						</Link>
					</div>
					<div className={styles.navLinks}>
						<Link href="sha256">
							<a>Sha256</a>
						</Link>
					</div>
					<div className={styles.navLinks}>
						<Link href="/hmac">
							<a>HMAC</a>
						</Link>
					</div>
				</div>
				<div>
					<a href="#about">About</a>
				</div>
			</div>
		</header>
	)
}

export default Navbar
