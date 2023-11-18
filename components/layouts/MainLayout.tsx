import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
import { type FC, type PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
