import Link from 'next/link'
import styles from './about.module.css'
import { type ReactNode } from 'react'

export default function About (): ReactNode {
  return (
    <div className={'center ' + styles.about}>
      <h1 className="title">About Page</h1>
      <Link className="description" href="/contact">
        Go to Contact
      </Link>
    </div>
  )
}
