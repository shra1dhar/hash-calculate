import React, { FC, useEffect, useState } from 'react'
import TextBox from './TextBox'
import styles from './styles.module.scss'
import { copyTextToClipboard } from '../../../utils/copy-to-clipboard'

interface Props {
	getFocusOnLast: () => void
	[x: string]: any
}

type MessageStatus = 'show' | 'hide'

const defaultPlaceholder = 'Hashed value appears here . . .'
const placeholderWithText = 'Click to copy text'

const getStatusClass = (status: MessageStatus) => {
	let statusClass = styles.message
	if (status === 'show') {
		statusClass += ` ${styles.showStatus}`
	}
	return statusClass
}

const Hashbox: FC<Props> = (restProps) => {
	const [copyStatus, setCopyStatus] = useState<MessageStatus>('hide')
	const placeholder = restProps.value ? placeholderWithText : defaultPlaceholder

	useEffect(() => {
		let id: NodeJS.Timeout
		if (copyStatus === 'show') {
			id = setTimeout(() => setCopyStatus('hide'), 800)
		}
		return () => clearTimeout(id)
	}, [copyStatus])

	const handleClick = async () => {
		if (!restProps.value) {
			return
		}
		try {
			await copyTextToClipboard(restProps.value)
			setCopyStatus('show')
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div onClick={handleClick} className={`${styles.inputContainer} ${styles.pointer} ${styles.overlay}`}>
			<div className={styles.placeholderWrap}>{placeholder}</div>
			<TextBox
				readOnly
				{...restProps}
				aria-readonly={true}
				className={styles.pointer}
				aria-placeholder="Type or paste text to be converted"
			/>
			<div className={getStatusClass(copyStatus)}>Copied !!</div>
		</div>
	)
}

export default Hashbox
