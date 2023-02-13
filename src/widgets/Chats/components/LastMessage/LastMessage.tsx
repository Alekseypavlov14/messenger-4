import { FC, useEffect, useState } from 'react'
import { useLastMessage } from './../../hooks/useLastMessage'
import { MessageEntity } from '@entities/messages'
import { getTimeView } from '@shared/utils/getTimeView'
import styles from './LastMessage.module.css'

interface LastMessageProps {
  chatId: number
}

export const LastMessage: FC<LastMessageProps> = ({ chatId }) => {
  const [lastMessage, setLastMessage] = useState<MessageEntity | null>(null)
  const getLastMessage = useLastMessage()

  useEffect(() => {
    getLastMessage(chatId).then(message => setLastMessage(message))
  }, [])

  const lastMessageText = lastMessage?.text.slice(0, 30)
  const lastMessageTime = getTimeView(lastMessage?.time || 0)

  return (
    <div className={styles.LastMessage}>
      <div className={styles.LastMessageText}>{lastMessageText}</div>
      <div className={styles.LastMessageTime}>{lastMessageTime}</div>
    </div>
  )
}