import Head from 'next/head'
import React from 'react'
import { sha256Data } from '../../src/store/constants'
import HomePage from '../../src/components/home-page'
import DynamicHead from '../../src/layouts/dynamic-head'
import { CryproProvider } from '../../src/store/Crypto-Context'

const Sha256 = () => {
	return (
		<CryproProvider value={sha256Data}>
			<Head>
				<DynamicHead />
			</Head>
			<HomePage />
		</CryproProvider>
	)
}

export default Sha256
