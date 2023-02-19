import { Container, Title } from 'standard-ui'
import { authStore } from '@app/auth'
import { FC } from 'react'
import styles from './SettingsHeader.module.css'

interface SettingsHeaderProps {}

export const SettingsHeader: FC<SettingsHeaderProps> = () => {
  const user = authStore((store) => store.user)
  
  return (
    <div className={styles.SettingsHeader}>
      <Container className={styles.Container}>
        <Title bold className={styles.Title}>
          {user?.login}
        </Title>
      </Container>
    </div>
  )
}