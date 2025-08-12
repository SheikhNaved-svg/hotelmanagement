
import './App.css'
import Navbar from './components/Navbar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Allrooms from './pages/Allrooms';
function App() {
  const isOwner=useLocation().pathname.includes('owner');
  return (
  <div >
    {!isOwner &&  <Navbar />
    }
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/rooms' element={<Allrooms />} />
    </Routes>
  <Footer />
  </div>
  )
}

export default App
