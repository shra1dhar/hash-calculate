import React, { forwardRef, MutableRefObject } from 'react'
import styles from './styles.module.scss'

interface Props {
	css?: string
	ref?: MutableRefObject<HTMLTextAreaElement>
	[x: string]: any
}

const TextBox = forwardRef<HTMLTextAreaElement, Props>(({ css = '', className = '', ...restProps }, ref) => {
	const textContainerCss = `${styles.textbox} ${css}`
	const textInputCss = `${styles.textboxInner} ${className}`

	return (
		<div className={textContainerCss}>
			<textarea {...restProps} ref={ref} cols={32} rows={15} aria-multiline={false} className={textInputCss}></textarea>
		</div>
	)
})
export default TextBox
