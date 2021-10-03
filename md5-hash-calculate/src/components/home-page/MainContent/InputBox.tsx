import React, { FC } from 'react'
import TextBox from './TextBox'
import styles from './styles.module.scss'

interface Props {
	[x: string]: any
}

const InputBox: FC<Props> = (props) => {
	const isTextPresent = !!props.value

	return (
		<div className={styles.inputContainer}>
			{!isTextPresent && (
				<div className={`${styles.placeholderWrap} ${styles.cusorInherit}`}>Type or paste your text here . . .</div>
			)}
			<TextBox {...props} css={styles.cusorInherit} aria-placeholder="Type or paste text to be converted" />
		</div>
	)
}

export default InputBox
