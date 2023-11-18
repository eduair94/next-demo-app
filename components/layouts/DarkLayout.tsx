import { type FC, type PropsWithChildren } from 'react'
import styles from './DarkLayout.module.css'

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.dark_div}>
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  )
}
