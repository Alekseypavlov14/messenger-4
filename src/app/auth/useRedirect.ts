import { useEffect } from 'react'
import { useNavigation } from "@app/navigation"
import { authStore } from "./store"

export function useRedirect() {
  const { navigateSignUpPage } = useNavigation()
  const user = authStore((store) => store.user)

  useEffect(() => {
    if (!user) navigateSignUpPage()
  }, [user])
}