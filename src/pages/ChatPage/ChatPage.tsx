import { ProtectedPage } from '@app/auth'
import { MessagePanel } from '@features/SendMessages'
import { useParams } from 'react-router-dom'
import { FC } from 'react'

interface ChatPageProps {}

export const ChatPage: FC<ChatPageProps> = () => {
  const chatId = Number(useParams().id)

  return (
    <ProtectedPage>
      <MessagePanel chatId={chatId} />
    </ProtectedPage>
  )
}