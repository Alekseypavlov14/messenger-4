import { FC } from 'react'
import { PrivatePage } from '@app/auth'
import { Header } from '@widgets/Header'
import { Chats } from '@widgets/Chats'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <PrivatePage>
      <Header />
      <Chats />
    </PrivatePage>
  )
}