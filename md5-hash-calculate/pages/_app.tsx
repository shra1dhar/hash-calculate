import type { AppProps } from 'next/app'
import GtagAnalytics from '../src/components/analytics/gtag'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GtagAnalytics />
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
