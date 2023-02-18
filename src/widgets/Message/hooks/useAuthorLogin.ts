import { authorLoginPreloader } from "../const"
import { findUserById } from "@entities/users"

type Callback = (authorLogin: string) => void

export async function useAuthorLogin(callback: Callback, authorId: number) {
  const author = await findUserById(authorId)

  const login = author?.login || authorLoginPreloader

  callback(login)
}