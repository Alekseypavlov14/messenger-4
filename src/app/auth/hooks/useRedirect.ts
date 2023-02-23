import { findUserByData, findUserById } from '@entities/users'
import { useNavigation } from "@app/navigation"
import { authStore } from "../store"
import { useEffect } from 'react'

export async function useRedirect() {
  const { navigateSignUpPage } = useNavigation()
  const user = authStore((store) => store.user)

  useEffect(() => {
    if (!user) return navigateSignUpPage();

    (async () => {
      const foundById = await findUserById(user.id)
      if (!foundById) return navigateSignUpPage()
      
      const foundByData = await findUserByData({ 
        login: user.login, 
        password: user.password 
      })
      if (!foundByData) return navigateSignUpPage()

      if (foundByData.id !== foundById.id) return navigateSignUpPage()
    })()
  }, [user])
}