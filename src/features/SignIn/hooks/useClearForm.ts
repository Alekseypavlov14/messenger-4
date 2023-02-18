import { signInStore } from './../store'

export function useClearForm() {
  const setLogin = signInStore((store) => store.setLogin)
  const setPassword = signInStore((store) => store.setPassword)

  return () => {
    setLogin('')
    setPassword('')
  }
}