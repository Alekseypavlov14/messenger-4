import { SettingsLinkButton } from '@features/Settings'
import { Container } from 'standard-ui'
import { Title } from '../Title/Title'
import { FC } from 'react'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container className={styles.HeaderContainer}>
        <Title />
        <SettingsLinkButton />
      </Container>
    </div>
  )
}