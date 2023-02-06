import { Route, Routes } from 'react-router-dom'
import { SearchPage } from '@pages/SearchPage'
import { Header } from '@widgets/Header'

export function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/sign-in' element={<></>} />
        <Route path='/sign-up' element={<></>} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  )
}
