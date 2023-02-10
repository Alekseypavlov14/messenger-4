import { FC, ReactNode } from 'react'
import { useRedirect } from '../hooks/useRedirect'

interface PrivatePageProps {
  children: ReactNode
}

export const PrivatePage: FC<PrivatePageProps> = ({ children }) => {
  useRedirect()
  
  return (
    <>{children}</>
  )
}