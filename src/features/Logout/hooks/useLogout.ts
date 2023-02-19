import { authStore } from '@app/auth'

export function useLogout() {
  const updateUser = authStore((store) => store.updateUser)
  return () => updateUser(null)
}