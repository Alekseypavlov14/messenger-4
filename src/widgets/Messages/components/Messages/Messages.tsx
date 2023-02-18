import { useScrollOnOutgoingMessage } from './../../hooks/useOnOutgoingMessage'
import { ScrollAnchor, useScroll } from '@features/ScrollDown'
import { useScrollOnMount } from './../../hooks/useScrollOnMount'
import { useChatMessages } from './../../hooks/useChatMessages'
import { useSeeMessages } from './../../hooks/useSeeMessages'
import { messagesStore } from './../../store'
import { Container } from 'standard-ui'
import { Message } from '@widgets/Message'
import { FC } from 'react'
import styles from './Messages.module.css'

interface MessagesProps {
  chatId: number
}

export const Messages: FC<MessagesProps> = ({ chatId }) => {
  const [scroll, ref] = useScroll()

  useScrollOnMount(scroll, ref)
  useScrollOnOutgoingMessage(scroll, ref)

  useChatMessages(chatId)
  useSeeMessages()
  
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