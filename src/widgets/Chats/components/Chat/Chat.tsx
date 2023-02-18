import { useNavigation } from '@app/navigation'
import { useChatTitle } from '@entities/chats'
import { FC, useState } from 'react'
import { LastMessage } from '../LastMessage/LastMessage'
import { ChatEntity } from '@entities/chats'
import styles from './Chat.module.css'

interface ChatProps extends ChatEntity {}

export const Chat: FC<ChatProps> = (chat) => {
  const [title, setTitle] = useState<string>('')
  useChatTitle((title) => setTitle(title), chat.id)
  
  const { navigateChatPage } = useNavigation()

  async function openChatHandler() {
    navigateChatPage(chat.id)
  }

  return (
    <div className={styles.Chat} onClick={openChatHandler}>
      <div className={styles.ChatName}>{title}</div>
      <LastMessage chatId={chat.id} />
    </div>
  )
}