import { FC, ReactNode } from 'react'
import { useRedirect } from '../hooks/useRedirect'

interface ProtectedPageProps {
  children: ReactNode
}

export const ProtectedPage: FC<ProtectedPageProps> = ({ children }) => {
  useRedirect()
  
  return (
    <>{children}</>
  )
}