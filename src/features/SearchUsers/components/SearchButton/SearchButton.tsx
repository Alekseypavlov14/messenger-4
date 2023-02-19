import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigation } from '@app/navigation'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import styles from './SearchButton.module.css'

interface SearchButtonProps {}

export const SearchButton: FC<SearchButtonProps> = () => {
  const { navigateSearchPage } = useNavigation()

  const navigateHandler = () => navigateSearchPage()

  return (
    <div className={styles.SearchButton} onClick={navigateHandler}>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}