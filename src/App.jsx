import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Update from './Update'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
