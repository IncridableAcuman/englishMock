import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Auth from './pages/Auth';
import Home from './pages/Home';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth />} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App