import { ProtectedPage } from '@app/auth'
import { FC } from 'react'

interface ChatPageProps {}

export const ChatPage: FC<ChatPageProps> = () => {
  return (
    <ProtectedPage>

    </ProtectedPage>
  )
}