import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Auth from './pages/Auth';
import Home from './pages/Home';
import English from './pages/English';
import Speaking from './pages/Speaking';
import Writing from './pages/Writing';
import Listening from './pages/Listening';
import Reading from './pages/Reading';
import Final from './pages/Final';
import Buying from './pages/Buying';
const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/english" element={<English />} />
        <Route path="/english/speaking" element={<Speaking />} />
        <Route path="/english/reading" element={<Reading />} />
        <Route path="/english/writing" element={<Writing />} />
        <Route path="/english/listening" element={<Listening />} />
        <Route path="/english/final" element={<Final />} />
        <Route path="/english/buying" element={<Buying />} />
    </Routes>
    </>
  )
}

export default App