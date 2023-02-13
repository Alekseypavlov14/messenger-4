import { FC, useEffect, useState } from 'react'
import { useNavigation } from '@app/navigation'
import { useChatTitle } from './../../hooks/useChatTitle'
import { LastMessage } from '../LastMessage/LastMessage'
import { ChatEntity } from '@entities/chats'
import { authStore } from '@app/auth'
import styles from './Chat.module.css'

interface ChatProps extends ChatEntity {}

export const Chat: FC<ChatProps> = (chat) => {
  const [chatTitle, setChatTitle] = useState<string>('')

  const user = authStore((store) => store.user)
  const { navigateChatPage } = useNavigation()
  
  const getChatTitle = useChatTitle()
  
  useEffect(() => {
    getChatTitle(chat, user).then(chatTitle => setChatTitle(chatTitle))
  }, [])

  async function openChatHandler() {
    navigateChatPage(chat.id)
  }

  return (
    <div className={styles.Chat} onClick={openChatHandler}>
      <div className={styles.ChatName}>{chatTitle}</div>
      <LastMessage chatId={chat.id} />
    </div>
  )
}