import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Conatct from './pages/Conatct'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
     <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Conatct />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
