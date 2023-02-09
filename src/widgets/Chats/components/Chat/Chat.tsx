import { FC, useEffect, useState } from 'react'
import { defaultChatName } from './../../const'
import { useNavigation } from '@app/navigation'
import { getChatTitle } from './../../utils/getChatTitle'
import { ChatEntity } from '@entities/chats'
import { authStore } from '@app/auth'
import styles from './Chat.module.css'

interface ChatProps extends ChatEntity {}

export const Chat: FC<ChatProps> = (chat) => {
  const [chatTitle, setChatTitle] = useState<string>('')
  const user = authStore((store) => store.user)
  const { navigateChatPage } = useNavigation()

  useEffect(() => {
    findChatTitle().then(chatTitle => setChatTitle(chatTitle))
  }, [])

  async function findChatTitle() {
    if (!user) return defaultChatName
    return await getChatTitle(chat, user)
  }

  async function openChatHandler() {
    navigateChatPage(chat.id)
  }

  return (
    <div className={styles.Chat} onClick={openChatHandler}>
      <div className={styles.ChatName}>{chatTitle}</div>
    </div>
  )
}