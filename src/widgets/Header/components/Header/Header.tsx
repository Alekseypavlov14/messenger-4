import { FC } from 'react'
import { SearchIcon } from '@features/SearchUsers'
import { Container } from 'standard-ui'
import { Title } from '../Title/Title'
import styles from './Header.module.css'

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