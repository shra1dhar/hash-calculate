import Head from 'next/head'
import React from 'react'
import { hmacData } from '../../src/store/constants'
import HomePage from '../../src/components/home-page'
import DynamicHead from '../../src/layouts/dynamic-head'
import { CryproProvider } from '../../src/store/Crypto-Context'

const HMAC = () => {
	return (
		<CryproProvider value={hmacData}>
			<Head>
				<DynamicHead />
			</Head>
			<HomePage />
		</CryproProvider>
	)
}

export default HMAC
