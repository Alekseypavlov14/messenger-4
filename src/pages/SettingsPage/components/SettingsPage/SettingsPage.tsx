import { Container, Title } from 'standard-ui'
import { SettingsHeader } from './../SettingsHeader/SettingsHeader'
import { LogoutSetting } from '@features/Logout'
import { ProtectedPage } from '@app/auth'
import { FC } from 'react'
import styles from './SettingsPage.module.css'

interface SettingsPageProps {}

export const SettingsPage: FC<SettingsPageProps> = () => {
  return (
    <ProtectedPage>
      <SettingsHeader />

      <Container className={styles.Container}>
        <Title bold>Settings</Title>
      </Container>

      <LogoutSetting />
    </ProtectedPage>
  )
}