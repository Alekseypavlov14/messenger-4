import { useNotSeenMessagesAmount } from '@features/NotSeenMessages'
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

  const [notSeenMessagesAmount, setNotSeenMessagesAmount] = useState(0)
  useNotSeenMessagesAmount((amount) => setNotSeenMessagesAmount(amount), chat.id)
  
  const { navigateChatPage } = useNavigation()

  async function openChatHandler() {
    navigateChatPage(chat.id)
  }

  return (
    <div className={styles.Chat} onClick={openChatHandler}>
      <div className={styles.MessageHeadline}>
        <div className={styles.ChatName}>{title}</div>

        {Boolean(notSeenMessagesAmount) && (
          <div className={styles.NotSeenMessagesAmount}>
            {notSeenMessagesAmount}
          </div>
        )}
      </div>
      
      <LastMessage chatId={chat.id} />
    </div>
  )
}