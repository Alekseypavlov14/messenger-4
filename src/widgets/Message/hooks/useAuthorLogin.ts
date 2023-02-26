import { authorLoginPreloader } from "../const"
import { useEffect, useState } from 'react'
import { findUserById } from "@entities/users"

export function useAuthorLogin(authorId: number) {
  const [login, setLogin] = useState(authorLoginPreloader)
  
  useEffect(() => {
    findUserById(authorId).then(author => {
      if (author) setLogin(author.login)
    })
  }, [authorId])

  return login
}