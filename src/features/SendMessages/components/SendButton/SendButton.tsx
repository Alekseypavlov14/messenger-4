import { sendMessageStore } from '@features/SendMessages/store'
import { useSendMessage } from './../../hooks/useSendMessage'
import { useClearInput } from './../../hooks/useClearInput'
import { Button } from 'standard-ui'
import { FC } from 'react'
import styles from './SendButton.module.css'

interface SendButtonProps {}

export const SendButton: FC<SendButtonProps> = () => {
  const sendMessage = useSendMessage()
  const clearInput = useClearInput()

  const messageText = sendMessageStore((store) => store.messageText)

  function sendMessageHandler() {
    if (!messageText.length) return
    sendMessage(messageText)
    clearInput()
  }

  return (
    <Button 
      className={styles.SendButton}
      onClick={sendMessageHandler}
    >
      Send
    </Button>
  )
}