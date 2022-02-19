import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import InputBox from './InputBox'
import MD5 from 'crypto-js/md5'
import Hashbox from './Hashbox'
import { useCryptoData } from '../../../store/Crypto-Context'

const FormContent = () => {
	const [inputVal, setInputValue] = useState<string>('')
	const [hashValue, setHashValue] = useState<string>('')
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const { hashAlgo } = useCryptoData()

	useEffect(() => {
		focusOnInput()
	}, [])

	useEffect(() => {
		if (!inputVal) {
			setHashValue('')
		} else {
			setHashValue(hashAlgo(inputVal))
		}
	}, [inputVal])

	function handleChange(e: React.SyntheticEvent<HTMLTextAreaElement>) {
		const value = e.currentTarget.value
		setInputValue(value)
	}

	function focusOnInput() {
		inputRef?.current?.focus()
	}

	return (
		<form className={styles.formContainer} autoComplete="off" autoCorrect="off" autoCapitalize="off">
			<InputBox value={inputVal} onChange={handleChange} innerRef={inputRef} />
			<Hashbox value={hashValue} />
		</form>
	)
}

export default FormContent
