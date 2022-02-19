import React, { FC } from 'react'
import TextBox from './TextBox'
import styles from './styles.module.scss'

interface Props {
	innerRef?: React.RefObject<HTMLTextAreaElement>
	[x: string]: any
}

const InputBox: FC<Props> = ({ innerRef, ...restProps }) => {
	const isTextPresent = !!restProps?.value

	function focusInput() {
		innerRef?.current?.focus()
	}

	return (
		<div className={`${styles.inputContainer} ${styles.bgWhite}`} onClick={focusInput}>
			{!isTextPresent && (
				<div className={`${styles.placeholderWrap} ${styles.cusorInherit}`}>Type or paste your text here . . .</div>
			)}
			<TextBox
				{...restProps}
				ref={innerRef}
				css={styles.cusorInherit}
				aria-placeholder="Type or paste text to be converted"
			/>
		</div>
	)
}

export default InputBox
