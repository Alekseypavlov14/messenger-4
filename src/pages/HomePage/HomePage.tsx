import { ProtectedPage } from '@app/auth'
import { SearchButton } from '@features/SearchUsers'
import { Header } from '@widgets/Header'
import { Chats } from '@widgets/Chats'
import { FC } from 'react'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <ProtectedPage>
      <Header />
      <Chats />
      <SearchButton />
    </ProtectedPage>
  )
}