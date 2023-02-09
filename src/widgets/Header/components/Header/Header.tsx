import { FC } from 'react'
import { SearchIcon } from '@features/SearchUsers'
import { Title } from '../Title/Title'
import styles from './Header.module.css'
import { Container } from 'standard-ui'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container className={styles.HeaderContainer}>
        <Title />
        <SearchIcon />
      </Container>
    </div>
  )
}