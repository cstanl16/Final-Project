import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';


function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className = "mainContainer">
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
