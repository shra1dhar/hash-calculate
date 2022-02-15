import { createContext, FC } from 'react'

export const CryptoContext = createContext(null)

import React from 'react'

interface Props {
	value: any
}

const CryproProvider: FC<Props> = ({ children, value }) => {
	return <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
}

export default CryproProvider
