import { Button, Container, Title } from 'standard-ui'
import { FC } from 'react'
import styles from './Setting.module.css'

interface SettingProps {
  title: string
  buttonLabel: string
  handler: () => void
}

export const Setting: FC<SettingProps> = ({ title, buttonLabel, handler }) => {
  return (
    <Container className={styles.Setting}>
      <Title className={styles.Title}>
        {title}
      </Title>
      
      <Button 
        className={styles.Button}
        onClick={handler}
      >
        {buttonLabel}
      </Button>
    </Container>
  )
}