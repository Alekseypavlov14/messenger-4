import { searchUsers } from "./searchUsers"
import { UserEntity } from "@entities/users"
import { create } from "zustand"

interface SearchUsersStore {
  searchingValue: string
  searchResult: UserEntity[]
  search: (searchingValue: string) => void
}

export const searchUsersStore = create<SearchUsersStore>((set) => ({
  searchingValue: '',
  searchResult: [],
  search: async (value) => {
    const users = await searchUsers(value)
    set((state) => ({
      ...state,
      searchingValue: value,
      searchResult: users
    }))
  }
}))