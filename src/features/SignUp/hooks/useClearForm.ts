import { signUpStore } from "../store"

export function useClearForm() {
  const setLogin = signUpStore((store) => store.setLogin)
  const setPassword = signUpStore((store) => store.setPassword)

  return () => {
    setLogin('')
    setPassword('')
  }
}