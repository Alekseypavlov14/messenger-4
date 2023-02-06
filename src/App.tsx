import { Route, Routes } from 'react-router-dom'
import { SearchPage } from '@pages/SearchPage'
import { SignUpPage } from '@pages/SignUpPage'
import { SignInPage } from '@pages/SignInPage'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  )
}
