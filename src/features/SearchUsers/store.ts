import { UserEntity } from "@entities/users"
import { create } from "zustand"

interface SearchUsersStore {
  searchingResult: UserEntity[]
  updateSearchingResult: (users: UserEntity[]) => void
}

export const searchUsersStore = create<SearchUsersStore>((set) => ({
  searchingResult: [],
  updateSearchingResult: (users) => {
    set((state) => ({
      ...state,
      searchingResult: users
    }))
  },
}))