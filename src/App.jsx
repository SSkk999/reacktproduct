import { Fragment } from "react"
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import Products from "./Pages/Products"
import Contacts from "./Pages/Contacts"
import "./index.css"

function App() {


  return (
    <Fragment >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="*" element={<div className="text-center text-danger">404 Not Found</div>}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
