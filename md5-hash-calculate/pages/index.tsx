import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../src/layouts/home-page'

/*
 * {@link - https://realfavicongenerator.net/}
 */
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta property="og:type" content="website" />
				<meta name="application-name" content="Hash Tools" />

				<meta name="google" content="notranslate" />

				<meta name="description" content="Online tools" />
				<meta property="og:description" content="Online tools" />
				<meta property="og:title" content="Online Hash Tools" />

				{/* Favicon */}
				<link rel="apple-touch-icon" sizes="196x196" href="/md5/img/logo196.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/md5/logo/logo144.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/md5/logo/apple-touch-icon.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/md5/logo/logo144.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/md5/logo/logo72.png" />
				<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/md5/img/logo152.png" />

				{/* <link rel="icon" href="/md5/logo/icon.svg" sizes="any" type="image/svg+xml" /> */}

				<link rel="icon" type="image/png" sizes="32x32" href="/md5/logo/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/md5/logo/favicon-16x16.png" />

				{/* <link rel="manifest" href="/md5/logo/site.webmanifest" /> */}
				<link rel="mask-icon" href="/md5/logo/safari-pinned-tab.svg" color="#5bbad5" />
				{/* <link rel="shortcut icon" href="/md5/logo/favicon.ico" /> */}

				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/md5/logo/browserconfig.xml" />
				<meta name="theme-color" content="#333333" />

				<title>Online Hash Tools</title>

				{/* <script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9404552898254197"
				/> */}
			</Head>

			<HomePage />
		</>
	)
}

export default Home
