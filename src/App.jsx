import './App.css'
import TestPage from './components/testPage'
import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';
import Home from './components/home.jsx'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/test' element={<TestPage />}/>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
