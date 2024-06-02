import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './screens/HomePage'
import AdminPanel from './screens/AdminPanel'

function App() {

  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/admin' element={<AdminPanel />} ></Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
