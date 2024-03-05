import { Outlet } from 'react-router-dom'
import Navbar from './components/cores/navbar'
import Footer from './components/cores/footer'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
