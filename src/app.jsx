import { useState } from 'preact/hooks'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home'

export function App() {
  const [val,setVal]=useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
