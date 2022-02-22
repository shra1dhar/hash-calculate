import MD5 from 'crypto-js/md5'
import sha256 from 'crypto-js/sha256'
import hmac from 'crypto-js/hmac-sha256'
import base64 from 'crypto-js/enc-base64url'

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
	overview: {
		title: 'MD5 hash Generator',
		body: [
			'MD5 hash calculate gives you online MD5 generated hash values. It uses MD5 algorithm to calculate MD5 hash. The MD5 hash is calculated in real time. It can be clicked and copied easily.',
			'You can verify the checksum also by pasting your string in the textbox.',
		],
	},
	whatOfIt: {
		title: 'What is MD5 ?',
		body: [
			'MD5 is a cryptographic hash algorithm that can be used to create a 128-bit string. Despite the known vulnerabilities MD5 is still popular. MD5 can be used to check integrity between files and string (text). It also has applications in security protocols like SSH, SSL, and IPSec.',
			'Initially, MD5 hash calculating function was developed for use as a secure cryptographic hash algorithm for authenticating digital signatures. Lately MD5 has been deprecated. Other cryptographic functions like Sha1 are now gaining traction.',
		],
	},
	advantages: {
		title: 'Advantages of MD5',
		body: [
			'MD5 algorithm gives small 32 letter string which can be used as a unique value.',
			'MD5 hash is used to store passwords in 128-bit form in some UNIX based systems.',
			'MD5 can be used to verify the checksum easily. This allows to check integrity.',
		],
	},
}

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
	overview: {
		title: 'SHA256 hash Generator',
		body: [
			'SHA256 hash calculate gives you online SHA256 generated hash values. It uses SHA256 algorithm to calculate SHA256 hash. The SHA256 hash is calculated in real time. It can be clicked and copied easily.',
			'You can verify the checksum also by pasting your string in the textbox.',
		],
	},
	whatOfIt: {
		title: 'What is SHA256 ?',
		body: [
			'SHA 256 is a part of the SHA 2 family of algorithms, where SHA stands for Secure Hash Algorithm.',
			'Published in 2001, it was a joint effort between the NSA and NIST to introduce a successor to the SHA 1 family, which was slowly losing strength against brute force attacks.',
			"SHA-256 Cryptographic Hash Algorithm. A cryptographic hash (sometimes called 'digest') is a kind of 'signature' for a text or a data file. SHA-256 generates an almost-unique 256-bit (32-byte) signature for a text.",
		],
	},
	advantages: {
		title: 'Advantages of SHA256',
		body: [
			'SHA-256 is an industry standard that is trusted by leading public-sector agencies and used widely by technology leaders.',
			'There are 2256 possible hash values when using SHA-256, which makes it nearly impossible for two different documents to coincidentally have the exact same hash value. (More on this in the following section).',
			'The avalanche effect: Unlike some older hashing algorithms, even a very minor change to the original information completely changes the hash value—what is known as an avalanche effect.',
		],
	},
}

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
	overview: {
		title: 'HMAC hash Generator',
		body: [
			'HMAC hash calculate gives you online HMAC generated hash values. It uses HMAC algorithm to calculate HMAC hash. The HMAC hash is calculated in real time. It can be clicked and copied easily.',
			'You can verify the checksum also by pasting your string in the textbox.',
		],
	},
	whatOfIt: {
		title: 'What is HMAC ?',
		body: [
			'HMAC algorithm stands for Hashed or Hash-based Message Authentication Code.',
			'It is a result of work done on developing a MAC derived from cryptographic hash functions.',
			'HMAC is a great resistance towards cryptanalysis attacks as it uses the Hashing concept twice. HMAC consists of twin benefits of Hashing and MAC and thus is more secure than any other authentication code.',
		],
	},
	advantages: {
		title: 'Advantages of HMAC',
		body: [
			'HMACs are ideal for high-performance systems like routers due to the use of hash functions which are calculated and verified quickly unlike the public key systems.',
			'Digital signatures are larger than HMACs, yet the HMACs provide comparably higher security.',
			'HMACs are used in administrations where public key systems are prohibited.',
		],
	},
}

const base54encode = {
	head: {
		applicationName: 'Base64Encode Calculate',
		description: 'Base64Encode online hash generator. Algorithm to generate checksum for Base64Encode in the browser',
		keywords:
			'Base64Encode Hash Calculator, Base64Encode Checker, Base64Encode Converter, Base64Encode Checksum Verifier, Generate Base64Encode, Compute Base64Encode, Calculate Base64Encode',
		title: 'Base64Encode Hash Calculator',
	},
	main: {
		heading: 'Base64Encode Hash Calculate ⚡️',
	},
	navbar: {
		title: 'Base64Encode Hash',
	},
	hashAlgo: (val: string) => base64(val),
	overview: {
		title: 'Base64Encode hash Generator',
		body: [
			'Base64Encode hash calculate gives you online Base64Encode generated hash values. It uses Base64Encode algorithm to calculate Base64Encode hash. The Base64Encode hash is calculated in real time. It can be clicked and copied easily.',
			'You can verify the checksum also by pasting your string in the textbox.',
		],
	},
	whatOfIt: {
		title: 'What is Base64Encode ?',
		body: [
			'Base64Encode algorithm stands for Hashed or Hash-based Message Authentication Code.',
			'It is a result of work done on developing a MAC derived from cryptographic hash functions.',
			'Base64Encode is a great resistance towards cryptanalysis attacks as it uses the Hashing concept twice. HMAC consists of twin benefits of Hashing and MAC and thus is more secure than any other authentication code.',
		],
	},
	advantages: {
		title: 'Advantages of Base64Encode',
		body: [
			'Base64Encode are ideal for high-performance systems like routers due to the use of hash functions which are calculated and verified quickly unlike the public key systems.',
			'Digital signatures are larger than Base64Encode, yet the Base64Encode provide comparably higher security.',
			'Base64Encode are used in administrations where public key systems are prohibited.',
		],
	},
}

export { md5Data, sha256Data, hmacData }
