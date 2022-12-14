
import React from 'react';
import Login from './pages/Login/Login';
import Monitor from './pages/Monitor/Monitor';
import Componentes from './pages/Componentes/Componentes';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Router>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/monitor' component={Monitor}/>
            <Route path='/componentes' component={Componentes}/>
          </Switch>
      </Router>

    </div>
    
  );
}

export default App;
