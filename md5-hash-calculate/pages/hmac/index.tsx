import Head from 'next/head'
import React from 'react'
import { hmacData } from '../../src/store/constants'
import HashPage from '../../src/layouts/hash-page'
import DynamicHead from '../../src/layouts/dynamic-head'
import { CryproProvider } from '../../src/store/Crypto-Context'

const HMAC = () => {
	return (
		<CryproProvider value={hmacData}>
			<Head>
				<DynamicHead />
			</Head>
			<HashPage />
		</CryproProvider>
	)
}

export default HMAC
