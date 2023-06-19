import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPlayer from './components/AddPlayer';
import ShowPlayer from './components/ShowPlayer';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/add-player" component={AddPlayer} />
          <Route path="/show-player" component={ShowPlayer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
