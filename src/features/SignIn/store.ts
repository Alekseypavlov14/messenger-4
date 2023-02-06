import { create } from "zustand"

interface SignInStore {
  login: string
  password: string
  setLogin: (value: string) => void
  setPassword: (value: string) => void
}

export const signInStore = create<SignInStore>((set) => ({
  login: '',
  password: '',
  setLogin: (value) => {
    set((state) => ({
      ...state,
      login: value
    }))
  },
  setPassword: (value: string) => {
    set((state) => ({
      ...state,
      password: value
    }))
  }
}))