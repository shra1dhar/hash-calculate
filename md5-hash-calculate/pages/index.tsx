import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../src/components/home-page'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<meta charSet="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta property="og:type" content="article" />
				<meta
					name="description"
					content="MD5 online hash generator. Algorithm to generate checksum for md5 in the browser"
				/>
				<meta
					property="og:description"
					content="MD5 online hash generator. Algorithm to generate checksum for md5 in the browser"
				/>
				<meta name="robots" content="..., ..." />
				<meta
					name="keywords"
					content="MD5 Hash Calculator, MD5 Checker, MD5 Converter, MD5 
Checksum Verifier, Generate MD5, Compute MD5, Calculate MD5"
				/>
				<meta property="og:title" content="MD5 Hash Calculator" />

				<link rel="shortcut icon" href="//dpidudyah7i0b.cloudfront.net/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="//dpidudyah7i0b.cloudfront.net/favicon.ico" type="image/x-icon" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/logo-96x96.png" />
				<title>MD5 Online Hash Calculator</title>
			</Head>

			<HomePage />
		</div>
	)
}

export default Home
