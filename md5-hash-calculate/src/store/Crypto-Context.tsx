import React, { createContext, useContext } from 'react'
import { md5Data } from './constants'

interface Content {
	title: string
	body: string[]
}

export interface CryptoData {
	head: {
		applicationName: string
		description: string
		keywords: string
		title: string
	}
	main: {
		heading: string
	}
	navbar: {
		title: string
	}
	hashAlgo: (val: string) => string
	overview: Content
	whatOfIt: Content
	advantages: Content
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
