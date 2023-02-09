import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigation } from '@app/navigation'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import styles from './SearchIcon.module.css'

interface SearchIconProps {}

export const SearchIcon: FC<SearchIconProps> = () => {
  const { navigateSearchPage } = useNavigation()

  const navigateHandler = () => navigateSearchPage()

  return (
    <div className={styles.SearchIcon} onClick={navigateHandler}>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}