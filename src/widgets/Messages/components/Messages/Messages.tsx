import { useChatMessages } from './../../hooks/useChatMessages'
import { messagesStore } from './../../store'
import { FC, useEffect } from 'react'
import { BottomAnchor } from '../BottomAnchor/BottomAnchor'
import { Message } from '@widgets/Message'
import styles from './Messages.module.css'

interface MessagesProps {
  chatId: number
}

export const Messages: FC<MessagesProps> = ({ chatId }) => {
  const subscribe = useChatMessages(chatId)
  useEffect(() => subscribe(), [])
  
  const messages = messagesStore((store) => store.messages)

  return (
    <div className={styles.Messages}>
      {messages.map(message => (
        <Message 
          message={message} 
          key={message.id} 
        />
      ))}
      <BottomAnchor />
    </div>
  )
}