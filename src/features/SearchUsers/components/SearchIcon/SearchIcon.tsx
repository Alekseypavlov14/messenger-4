import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchIcon.module.css'

interface SearchIconProps {}

export const SearchIcon: FC<SearchIconProps> = () => {
  const navigate = useNavigate()

  const navigateHandler = () => navigate('/search')

  return (
    <div className={styles.SearchIcon} onClick={navigateHandler}>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}