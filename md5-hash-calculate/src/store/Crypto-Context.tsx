import React, { createContext, useContext } from 'react'
import { md5Data } from './constants'

export interface CryptoData {
	head: {
		applicationName: string
		description: string
		keywords: string
		title: string
	}
}

export const CryptoContext = createContext<CryptoData>(md5Data)

interface Props {
	children: React.ReactNode
	value: CryptoData
}

const CryproProvider = ({ children, value }: Props) => {
	return <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
}

const useCryptoData = () => {
	const context = useContext<CryptoData>(CryptoContext)
	if (context === undefined) {
		throw new Error('useCryptoData must be used within a CryproProvider')
	}
	return context
}

export { CryproProvider, useCryptoData }
