import { FC, useState } from 'react'
import { useLogout } from './../../hooks/useLogout'
import { Setting } from '@features/Settings'
import { Confirm } from 'standard-ui'

interface LogoutSettingProps {}

export const LogoutSetting: FC<LogoutSettingProps> = () => {
  const [isConfirmShown, setConfirmShown] = useState(false)

  const openConfirm = () => setConfirmShown(true)
  const closeConfirm = () => setConfirmShown(false)

  const logout = useLogout()

  return (
    <>
      <Setting 
        title='Logout from this account'
        buttonLabel='Logout'
        handler={openConfirm}
      />
  
      <Confirm 
        title='Are you sure to logout?'
        isShown={isConfirmShown}
        onConfirm={logout}
        onCancel={closeConfirm}
        onClose={closeConfirm}
      />
    </>
  )
}