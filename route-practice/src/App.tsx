
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About/About'
import Layout from './Pages/Layout'
import Contact from './Pages/Contact'
import ProductsLayout from './Pages/Products/ProductLayout'
import ProductList from './Pages/Products/ProductList'
import ProductDetail from './Pages/Products/ProductDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Home />}/>
              <Route path="about" element={<About />}/>
              <Route path="contact-Us" element={<Contact/>}/>
      </Route>
      <Route path="products" element={<ProductsLayout />}>
              <Route index element={<ProductList />}/>
              <Route path=":id" element={<ProductDetail />}/>
            </Route>
    </Routes>
    
    
    </BrowserRouter>
     
    </>
  )
}

export default App
