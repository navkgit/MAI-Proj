import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PostProject from './pages/PostProject'
import ProjectsList from './pages/ProjectsList'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostProject/>} />
          <Route path="/project" element={<ProjectsList/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
