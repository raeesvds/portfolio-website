import React from 'react';
import Navbar from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Ringsizer from './components/pages/Ringsizer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Route path='/ringsizer' component={Ringsizer} />
      </Router>
    </>
  );
}

export default App;

