import Head from 'next/head'
import React from 'react'
import { md5Data } from '../../src/store/constants'
import HomePage from '../../src/components/home-page'
import DynamicHead from '../../src/layouts/dynamic-head'
import { CryproProvider } from '../../src/store/Crypto-Context'

const Md5 = () => {
	return (
		<CryproProvider value={md5Data}>
			<Head>
				<DynamicHead />
			</Head>

			<HomePage />
		</CryproProvider>
	)
}

export default Md5
