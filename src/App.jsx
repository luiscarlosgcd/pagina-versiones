
import React from 'react';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Monitor from './pages/Monitor/Monitor.jsx';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Router>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/monitor' component={Monitor}/>
          </Switch>
      </Router>

    </div>
    
  );
}

export default App;
