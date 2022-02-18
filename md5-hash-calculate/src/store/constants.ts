import MD5 from 'crypto-js/md5'
import sha256 from 'crypto-js/sha256'
import hmac from 'crypto-js/hmac-sha256'

const md5Data = {
	head: {
		applicationName: 'MD5 Hash Calculate',
		description: 'MD5 online hash generator. Algorithm to generate checksum for md5 in the browser',
		keywords:
			'MD5 Hash Calculator, MD5 Checker, MD5 Converter, MD5 Checksum Verifier, Generate MD5, Compute MD5, Calculate MD5',
		title: 'MD5 Hash Calculator',
	},
	main: {
		heading: 'MD5 Hash Calculate ⚡️',
	},
	navbar: {
		title: 'MD5 Hash',
	},
	hashAlgo: (val: string) => MD5(val).toString(),
} as const

const sha256Data = {
	head: {
		applicationName: 'SHA256 Hash Calculate',
		description: 'SHA256 online hash generator. Algorithm to generate checksum for SHA256 in the browser',
		keywords:
			'SHA256 Hash Calculator, SHA256 Checker, SHA256 Converter, SHA256 Checksum Verifier, Generate SHA256, Compute SHA256, Calculate SHA256',
		title: 'SHA256 Hash Calculator',
	},
	main: {
		heading: 'SHA256 Hash Calculate ⚡️',
	},
	navbar: {
		title: 'SHA256 Hash',
	},
	hashAlgo: (val: string) => sha256(val).toString(),
} as const

const hmacData = {
	head: {
		applicationName: 'HMAC Calculate',
		description: 'HMAC online hash generator. Algorithm to generate checksum for HMAC in the browser',
		keywords:
			'HMAC Hash Calculator, HMAC Checker, HMAC Converter, HMAC Checksum Verifier, Generate HMAC, Compute HMAC, Calculate HMAC',
		title: 'HMAC Hash Calculator',
	},
	main: {
		heading: 'HMAC Hash Calculate ⚡️',
	},
	navbar: {
		title: 'HMAC Hash',
	},
	hashAlgo: (val: string) => hmac(val, '').toString(),
} as const

export { md5Data, sha256Data, hmacData }
