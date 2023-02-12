import { useChatMessages } from '@widgets/Messages/hooks/useChatMessages'
import { messagesStore } from '@widgets/Messages/store'
import { Message } from '@widgets/Message'
import { FC, useEffect } from 'react'
import styles from './Messages.module.css'

interface MessagesProps {
  chatId: number
}

export const Messages: FC<MessagesProps> = ({ chatId }) => {
  const messages = messagesStore((store) => store.messages)

  const subscribe = useChatMessages(chatId)
  useEffect(() => subscribe(), [])

  return (
    <div className={styles.Messages}>
      {messages.map(message => (
        <Message 
          message={message} 
          key={message.id} 
        />
      ))}
    </div>
  )
}