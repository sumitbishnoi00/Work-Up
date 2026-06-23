import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/view/HomePage'
import Footer from './components/common/Footer'

function App() {
  

  return (
    <>
     <BrowserRouter>
          
          <Routes>

              <Route path='/' element={<HomePage />} />
          </Routes>
            <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
