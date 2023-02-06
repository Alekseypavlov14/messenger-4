import { Route, Routes } from 'react-router-dom'
import { SearchPage } from '@pages/SearchPage'
import { SignUpPage } from '@pages/SignUpPage'
import { SignInForm } from '@features/SignIn'

export function App() {
  return (
    <>
      <SignInForm />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/sign-in' element={<></>} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  )
}
