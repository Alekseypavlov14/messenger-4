import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigation } from '@app/navigation'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import styles from './SettingsLinkButton.module.css'

interface SettingsLinkButtonProps {}

export const SettingsLinkButton: FC<SettingsLinkButtonProps> = () => {
  const { navigateSettingsPage } = useNavigation()

  return (
    <div 
      className={styles.SettingsLinkButton}
      onClick={navigateSettingsPage}
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </div>
  )
}