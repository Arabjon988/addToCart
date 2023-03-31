// import Routes, route
import { Route, Routes } from "react-router-dom"

// import pages
import Cart from "./Cart"
import Home from "./Home"

// import components
import Navbar from "./components/Navbar"

// import css file
import './App.css'


function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
