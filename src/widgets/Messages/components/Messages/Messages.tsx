import { useScrollOnMount } from './../../hooks/useScrollOnMount'
import { useChatMessages } from './../../hooks/useChatMessages'
import { useSeeMessages } from './../../hooks/useSeeMessages'
import { messagesStore } from './../../store'
import { FC, useEffect } from 'react'
import { ScrollAnchor } from '@features/ScrollDown'
import { Container } from 'standard-ui'
import { Message } from '@widgets/Message'
import styles from './Messages.module.css'

interface MessagesProps {
  chatId: number
}

export const Messages: FC<MessagesProps> = ({ chatId }) => {
  useChatMessages(chatId)
  
  useSeeMessages()

  const ref = useScrollOnMount()
  
  const messages = messagesStore((store) => store.messages)

  return (
    <Container className={styles.Container}>
      {messages.map(message => (
        <Message 
          message={message} 
          key={message.id} 
        />
      ))}
      <ScrollAnchor reference={ref} />
    </Container>
  )
}