import { sendMessageStore } from './../../store'
import { FC, useEffect } from 'react'
import { MessageInput } from '../MessageInput/MessageInput'
import { SendButton } from '../SendButton/SendButton'
import { Container } from 'standard-ui'
import styles from './MessagePanel.module.css'

interface MessagePanelProps {
  chatId: number
}

export const MessagePanel: FC<MessagePanelProps> = ({ chatId }) => {
  const setChatId = sendMessageStore((store) => store.setChatId)

  useEffect(() => setChatId(chatId), [])

  return (
    <div className={styles.MessagePanel}>
      <Container className={styles.MessagePanelContainer}>
        <MessageInput />
        <SendButton />
      </Container>
    </div>
  )
}