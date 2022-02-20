import Script from 'next/script'
import React from 'react'

const GtagAnalytics = () => {
	return (
		<>
			<Script
				async
				id="gtagmanager"
				key="gtagmanager"
				strategy="beforeInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-X1KD0PV54N"
			/>
			<Script
				id="googleAnalytics"
				key="googleAnalytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					
						gtag('config', 'G-X1KD0PV54N');
          `,
				}}
			/>
		</>
	)
}

export default GtagAnalytics
