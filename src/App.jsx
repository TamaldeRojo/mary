import BodyContent from './components/BodyContent.jsx'
import Gallery from './components/Gallery.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-br from-[#F8F4EC] to-[#CE5A67]'>
    <Parallax>
      <ParallaxLayer
          sticky={{start:0,end:1}}
          className=''
        >
          <Footer/>
      </ParallaxLayer>
    </Parallax>
      
        {/* <Navbar/> */}
        <BodyContent/>
       
        <br/>
        <Gallery/>
        <br/>

        <br/>
      </div>
    </>
  )
}

export default App
