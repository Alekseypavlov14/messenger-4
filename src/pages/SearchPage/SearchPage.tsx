import { FC } from 'react'
import { SearchField } from '@widgets/SearchField'
import { PrivatePage } from '@app/auth'
import { Header } from '@widgets/Header'

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  return (
    <PrivatePage>
      <Header />
      <SearchField />
    </PrivatePage>
  )
}