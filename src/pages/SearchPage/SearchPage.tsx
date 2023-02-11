import { FC } from 'react'
import { SearchField } from '@widgets/SearchField'
import { ProtectedPage } from '@app/auth'
import { Header } from '@widgets/Header'

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  return (
    <ProtectedPage>
      <Header />
      <SearchField />
    </ProtectedPage>
  )
}