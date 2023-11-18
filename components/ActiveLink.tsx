import Link from 'next/link'
import { headers } from 'next/headers'
import { type CSSProperties, type FC } from 'react'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  href: string
  text: string
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const headersList = headers()
  // read the custom x-url header
  const asPath = headersList.get('x-url') ?? ''
  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  )
}
