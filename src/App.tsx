import { Route, Routes } from 'react-router-dom'
import { SearchPage } from '@pages/SearchPage'
import { SignUpPage } from '@pages/SignUpPage'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/sign-in' element={<></>} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  )
}
