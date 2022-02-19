import React, { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface Props {
	name: string
	href: string
}

const Bubble: FC<Props> = ({ name, href }) => {
	return (
		<Link href={href}>
			<a className={styles.circle}>{name}</a>
		</Link>
	)
}

export default Bubble
