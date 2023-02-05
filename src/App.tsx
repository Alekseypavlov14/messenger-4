import { Route, Routes } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<></>}>
          <Route path='/' element={<></>} />
          <Route path='/sign-in' element={<></>} />
          <Route path='/sign-up' element={<></>} />
          <Route path='/search' element={<></>} />
        </Route>
      </Routes>
    </div>
  )
}
