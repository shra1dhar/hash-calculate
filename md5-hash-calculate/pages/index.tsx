import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../src/components/home-page'

/*
 * {@link - https://realfavicongenerator.net/}
 */
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta property="og:type" content="website" />
				<meta name="application-name" content="MD5 Hash Calculate" />

				<meta name="google" content="notranslate" />

				<meta
					name="description"
					content="MD5 online hash generator. Algorithm to generate checksum for md5 in the browser"
				/>
				<meta
					property="og:description"
					content="MD5 online hash generator. Algorithm to generate checksum for md5 in the browser"
				/>
				<meta
					name="keywords"
					content="MD5 Hash Calculator, MD5 Checker, MD5 Converter, MD5 
Checksum Verifier, Generate MD5, Compute MD5, Calculate MD5"
				/>
				<meta property="og:title" content="MD5 Hash Calculator" />

				<link rel="canonical" href="https://md5.hash-calculate.com" />

				{/* Favicon */}
				<link rel="apple-touch-icon" sizes="196x196" href="/md5/img/logo196.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/md5/logo/logo144.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/md5/logo/apple-touch-icon.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/md5/logo/logo144.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/md5/logo/logo72.png" />
				<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/md5/img/logo152.png" />

				<link rel="icon" href="/md5/logo/icon.svg" sizes="any" type="image/svg+xml" />

				<link rel="icon" type="image/png" sizes="32x32" href="/md5/logo/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/md5/logo/favicon-16x16.png" />

				{/* <link rel="manifest" href="/md5/logo/site.webmanifest" /> */}
				<link rel="mask-icon" href="/md5/logo/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/md5/logo/favicon.ico" />

				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/md5/logo/browserconfig.xml" />
				<meta name="theme-color" content="#333333" />

				<title>MD5 Hash Calculator</title>

				{/* <script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9404552898254197"
				/> */}
			</Head>

			<HomePage />
		</div>
	)
}

export default Home
