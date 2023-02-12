import { AuthStorage } from "./storage"
import { UserEntity } from "@entities/users"
import { create } from "zustand"

type AuthUserValue = UserEntity | null

interface AuthStore {
  user: AuthUserValue
  updateUser: (newUser: AuthUserValue) => void
}

export const authStore = create<AuthStore>((set) => ({
  user: AuthStorage.getValue(),
  updateUser: (value) => {
    AuthStorage.setValue(value)
    set((state) => ({
      ...state,
      user: value
    }))
  }
}))