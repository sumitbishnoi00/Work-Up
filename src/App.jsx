import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Homepage from './components/view/HomePage'

function App() {
  

  return (
    <>
     <BrowserRouter>
          <Routes>
              <Route path='/' element={<Homepage />} />
          </Routes>
            <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
