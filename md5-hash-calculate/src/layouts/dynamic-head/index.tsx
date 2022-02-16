import React from 'react'
import CommonHeadTag from './common'
import { useCryptoData } from '../../store/Crypto-Context'

const DynamicHead = () => {
	const { head } = useCryptoData()

	return (
		<>
			<CommonHeadTag />
			<meta name="application-name" content={head.applicationName} />
			<meta name="description" content={head.description} />
			<meta property="og:description" content={head.description} />
			<meta name="keywords" content={head.keywords} />
			<meta property="og:title" content={head.title} />
			<title>{head.title}</title>
		</>
	)
}

export default DynamicHead
