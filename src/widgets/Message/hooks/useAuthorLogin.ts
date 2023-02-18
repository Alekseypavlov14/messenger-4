import { findUserById, UserEntity } from "@entities/users"
import { authorLoginPreloader } from "../const"
import { useEffect } from 'react'

type Callback = (authorLogin: string) => void

export async function useAuthorLogin(callback: Callback, authorId: number) {
  function serveAuthorLogin(author: UserEntity | null) {
    const login = author?.login || authorLoginPreloader
    callback(login)
  }

  useEffect(() => {
    findUserById(authorId).then(serveAuthorLogin)
  }, [authorId])
}