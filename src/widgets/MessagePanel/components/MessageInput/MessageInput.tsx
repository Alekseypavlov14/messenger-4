import { sendMessageStore } from './../../store'
import { ChangeEvent, FC } from 'react'
import styles from './MessageInput.module.css'

interface MessageInputProps {}

export const MessageInput: FC<MessageInputProps> = () => {
  const messageText = sendMessageStore((store) => store.messageText)
  const updateMessageText = sendMessageStore((store) => store.updateMessageText)

  function updateMessageTextHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    updateMessageText(e.target.value)
  }

  return (
    <textarea 
      onChange={updateMessageTextHandler}
      className={styles.MessageInput}
      placeholder='Message'
      value={messageText}
      rows={1}
    />
  )
}