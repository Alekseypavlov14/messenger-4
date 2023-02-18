import { useClearForm } from '@features/SignIn/hooks/useClearForm';
import { createUserInDatabase, UserData, isUserDataValid } from "@entities/users"
import { useNavigation } from '@app/navigation'
import { signUpStore } from './../store'
import { authStore } from "@app/auth"

export function useSignUp() {
  const updateUser = authStore((store) => store.updateUser)

  const login = signUpStore((store) => store.login)
  const password = signUpStore((store) => store.password)
  const userData: UserData = { login, password }

  const { navigateHomePage } = useNavigation()
  const clearForm = useClearForm()

  return async () => {
    if (!isUserDataValid(userData)) return
  
    const user = await createUserInDatabase(userData).catch(e => console.log(e)) || null
    updateUser(user)

    navigateHomePage()
    clearForm()
  }
}