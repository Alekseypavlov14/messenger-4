import { ChangeEvent, FC, useRef } from 'react'
import { sendMessageStore } from './../../store'
import { useInputSize } from './../../hooks/useInputSize'
import styles from './MessageInput.module.css'

interface MessageInputProps {}

export const MessageInput: FC<MessageInputProps> = () => {
  const messageText = sendMessageStore((store) => store.messageText)
  const updateMessageText = sendMessageStore((store) => store.updateMessageText)

  function updateMessageTextHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    updateMessageText(e.target.value)
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useInputSize(textareaRef)

  return (
    <textarea 
      onChange={updateMessageTextHandler}
      className={styles.MessageInput}
      placeholder='Message'
      value={messageText}
      ref={textareaRef}
    />
  )
}