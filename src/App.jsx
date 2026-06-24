import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Home from './components/view/Home'

function App() {
  

  return (
    <>
     <BrowserRouter>
          
          <Routes>

              <Route path='/' element={<Home />} />
          </Routes>
            <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
