import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import './App.css'

function App() {
  const routes = useRoutes(false) //флаг isAuth
  return (
    //чтобы работал роутинг, надо обернуть в Route
    <Router>
      <div className="App">
        <header className="App-header">{routes}</header>
      </div>
    </Router>
  )
}

export default App
