import { authorLoginPreloader } from "../const"
import { findUserById } from "@entities/users"
import { useEffect } from 'react'

type Callback = (authorLogin: string) => void

export async function useAuthorLogin(callback: Callback, authorId: number) {
  useEffect(() => {
    findUserById(authorId).then(author => {
      const login = author?.login || authorLoginPreloader
      callback(login)
    })
  }, [authorId])
}