import { useLastMessage } from './../../hooks/useLastMessage'
import { getTimeView } from '@shared/utils/getTimeView'
import { FC } from 'react'
import styles from './LastMessage.module.css'

interface LastMessageProps {
  chatId: number
}

export const LastMessage: FC<LastMessageProps> = ({ chatId }) => {
  const lastMessage = useLastMessage(chatId)

  const lastMessageText = lastMessage?.text.slice(0, 30)
  const lastMessageTime = getTimeView(lastMessage?.time || 0)

  return (
    <div className={styles.LastMessage}>
      <div className={styles.LastMessageText}>{lastMessageText}</div>
      <div className={styles.LastMessageTime}>{lastMessageTime}</div>
    </div>
  )
}