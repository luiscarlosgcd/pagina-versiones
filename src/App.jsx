
import React from 'react';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/'/>
          </Switch>
      </Router>
      <Home/>
    </div>
    
  );
}

export default App;
