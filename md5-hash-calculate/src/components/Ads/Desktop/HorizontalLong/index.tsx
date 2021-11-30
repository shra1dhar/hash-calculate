import React, { useEffect } from 'react'
import styles from './styles.module.scss'

const HorizontalLongAd = () => {
	useEffect(() => {
		const w = window as any
		w.adsbygoogle = w.adsbygoogle || []

		let id: NodeJS.Timeout
		try {
			w.adsbygoogle.push({})
		} catch (e) {
			console.log(e)
		}
		// id = setTimeout(() => {
		// 	// ;(window as any).adsbygoogle.push({})
		// }, 0)

		return () => {
			clearTimeout(id)
		}
	}, [])

	return (
		<div className={styles.adContainer}>
			{/* <ins
				className="adsbygoogle"
				style={{ display: 'block' }}
				data-ad-client="ca-pub-9404552898254197"
				data-ad-slot="8929270748"
				data-ad-format="auto"
				data-adtest="on"
				data-full-width-responsive="true"
			/> */}
			{/* <!-- 728x90 fixed ad --> */}
			<ins
				className="adsbygoogle"
				style={{ display: 'inline-block', width: 728, height: 90 }}
				data-ad-client="ca-pub-9404552898254197"
				data-ad-slot="1618644986"
				// data-adtest="on"
			></ins>
			<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>{' '}
		</div>
	)
}

export default HorizontalLongAd
