import { Outlet } from 'react-router-dom'
import './App.css'
import { ComplexNavbar } from './Components/Header'
import { FooterWithSocialLinks } from './Components/Footer'

function App() {
 

  return (
    <>
    <div className="flex flex-col justify-between min-h-screen">
      <ComplexNavbar className="fixed top-0 w-full" />
      <Outlet className="flex-1" />
      <FooterWithSocialLinks className="fixed bottom-0 w-full" />
    </div>
  </>
  )
}

export default App
