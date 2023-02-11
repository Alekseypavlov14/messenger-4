import { Route, Routes } from 'react-router-dom'
import { HomePage } from '@pages/HomePage'
import { SignInPage } from '@pages/SignInPage'
import { SignUpPage } from '@pages/SignUpPage'
import { SearchPage } from '@pages/SearchPage'
import { ChatPage } from '@pages/ChatPage'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/chat/:id' element={<ChatPage />} />
      </Routes>
    </>
  )
}
