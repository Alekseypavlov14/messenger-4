import { FC } from 'react'
import styles from './Text.module.css'

interface TextProps {
  text: string
}

export const Text: FC<TextProps> = ({ text }) => {
  return (
    <div className={styles.Text}>
      {text}
    </div>
  )
}