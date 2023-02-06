import { FC, ReactNode } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import styles from './Link.module.css'

interface LinkProps {
  to: string
  children: ReactNode
}

export const Link: FC<LinkProps> = ({ to, children }) => {
  return (
    <ReactLink
      className={styles.Link} 
      to={to}
    >
      {children}
    </ReactLink>
  )
}