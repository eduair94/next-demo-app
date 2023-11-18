import { type ReactNode } from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]

export const Navbar = (): ReactNode => {
  return (
    <nav className={styles.nav}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={text} href={href} text={text} />
      ))}
    </nav>
  )
}
