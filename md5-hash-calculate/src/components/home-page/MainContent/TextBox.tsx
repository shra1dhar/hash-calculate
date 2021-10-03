import React, { FC } from 'react'
import styles from './styles.module.scss'

interface Props {
	css?: string
	[x: string]: any
}

const TextBox: FC<Props> = ({ css = '', className = '', ...restProps }) => {
	const textContainerCss = `${styles.textbox} ${css}`
	const textInputCss = `${styles.textboxInner} ${className}`

	return (
		<div className={textContainerCss}>
			<textarea {...restProps} cols={32} rows={15} aria-multiline={false} className={textInputCss}></textarea>
		</div>
	)
}

export default TextBox
