import { FC } from 'react'
import { ProtectedPage } from '@app/auth'
import { Header } from '@widgets/Header'
import { Chats } from '@widgets/Chats'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <ProtectedPage>
      <Header />
      <Chats />
    </ProtectedPage>
  )
}