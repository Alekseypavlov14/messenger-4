import { useNavigation } from "@app/navigation"
import { authStore } from "../store"
import { useEffect } from 'react'
import { findUserById } from '@entities/users'

export async function useRedirect() {
  const { navigateSignUpPage } = useNavigation()
  const user = authStore((store) => store.user)

  useEffect(() => {
    if (!user) return navigateSignUpPage()
    findUserById(user.id).then(result => !result && navigateSignUpPage())
  }, [user])
}