import { useContext } from 'react'
import CryptoContext from './Crypto-Context'

const useCryptoData = () => {
	const context = useContext<any>(CryptoContext)
	if (context === undefined) {
		throw new Error('useCryptoData must be used within a CryproProvider')
	}
	return context
}

export default useCryptoData
