import { FC, useEffect, useState } from 'react'
import { defaultChatName } from '@features/ShowChats/const'
import { getChatTitle } from './../../utils/getChatTitle'
import { ChatEntity } from '@entities/chats'
import { authStore } from '@app/auth'
import styles from './Chat.module.css'

interface ChatProps extends ChatEntity {}

export const Chat: FC<ChatProps> = (chat) => {
  const [chatTitle, setChatTitle] = useState<string>('')
  const user = authStore((store) => store.user)

  useEffect(() => {
    findChatTitle().then(chatTitle => setChatTitle(chatTitle))
  }, [])

  async function findChatTitle() {
    if (!user) return defaultChatName
    return await getChatTitle(chat, user)
  }

  return (
    <div className={styles.Chat}>
      <div className={styles.ChatName}>{chatTitle}</div>
    </div>
  )
}