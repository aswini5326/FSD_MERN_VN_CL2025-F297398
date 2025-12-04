import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Departments from './pages/Departments'
import DepartmentDetails from './pages/DepartmentDetails'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <div className="app">
      <Header/>

      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/departments' element={<Departments/>}/>
          <Route path='/departments/:deptId' element={<DepartmentDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  )
}

export default App
