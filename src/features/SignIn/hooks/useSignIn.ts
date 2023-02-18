import { findUserByData, UserData, isUserDataValid } from '@entities/users'
import { useNavigation } from '@app/navigation'
import { useClearForm } from './useClearForm'
import { signInStore } from '../store'
import { authStore } from '@app/auth'

export function useSignIn() {
  const updateUser = authStore((store) => store.updateUser)
  
  const login = signInStore((store) => store.login)
  const password = signInStore((store) => store.password)
  const userData: UserData = { login, password }
  
  const { navigateHomePage } = useNavigation()
  const clearForm = useClearForm()

  return async () => {
    if (!isUserDataValid(userData)) return
    
    const user = await findUserByData(userData)
    updateUser(user)

    navigateHomePage()
    clearForm()
  }
}
