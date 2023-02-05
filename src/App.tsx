import { Route, Routes } from 'react-router-dom'
import { SearchPage } from '@pages/SearchPage'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/sign-in' element={<></>} />
        <Route path='/sign-up' element={<></>} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  )
}
