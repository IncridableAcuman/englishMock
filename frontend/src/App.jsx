import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Auth from './pages/Auth';
import Home from './pages/Home';
import Reading from './pages/Reading';
import Speaking from './pages/Speaking';
import Listening from './pages/Listening';
import Writing from './pages/Writing';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/reading' element={<Reading/>} />
      <Route path='/speaking' element={<Speaking/>} />
      <Route path='/listening' element={<Listening/>} />
      <Route path='/writing' element={<Writing/>} />
    </Routes>
    </>
  )
}

export default App