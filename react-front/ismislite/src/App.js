import Landing from './modules/Landing';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Landing />
    </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}


export default App;
