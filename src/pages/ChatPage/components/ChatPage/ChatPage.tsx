import { ProtectedPage } from '@app/auth'
import { MessagePanel } from '@widgets/MessagePanel'
import { ChatHeader } from '../ChatHeader/ChatHeader'
import { useParams } from 'react-router-dom'
import { Messages } from '@widgets/Messages/components/Messages/Messages'
import { Header } from '@widgets/Header'
import { FC } from 'react'
import styles from './ChatPage.module.css'

interface ChatPageProps {}

export const ChatPage: FC<ChatPageProps> = () => {
  const chatId = Number(useParams().id)

  return (
    <ProtectedPage>
      <div className={styles.ChatPage}>
        <ChatHeader chatId={chatId} />
        <Messages chatId={chatId} />
        <MessagePanel chatId={chatId} />
      </div>
    </ProtectedPage>
  )
}