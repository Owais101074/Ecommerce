import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Carousel from './Components/Carousel'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
   <>
   
   <Navbar />
   

<Routes>
  <Route path="/" element={
      <>
        <Carousel />
        <Herosection />
        <Cards />
      </>
    }
  />

  <Route path="/about" element={
    <>
    <About />
     <Footer />
    </>
    } />
</Routes>


   </>
  )
}

export default App