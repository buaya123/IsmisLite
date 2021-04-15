import React from 'react'
import Vid from './VideoIndex.js'
import About1 from './About1.js'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  
  return (
      <Router>
      <div>
        <Switch>
          {/* <Route path="/" exact component={} /> */}
        </Switch>
        <Navbar/>
        <Vid />
        <About1 />
      </div>
      </Router>
  )
}

export default App
