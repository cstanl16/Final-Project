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
import SignUpPage from './LoginPage/SignUpPage';
import Footer from './Footer/Footer';
import BudgetList from './components/budget-list.component'
import EditBudget from './components/edit-budget.component'
import CreateBudget from './components/create-budget.component'
import CreateUser from './components/create-user.component'


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
          <Route path="/signUp">
            <SignUpPage/>
          </Route>
          <Route path ="/budgetList" exact component={BudgetList} /> 
          <Route path ="/edit/:id" component={EditBudget} />
          <Route path ="/create" component={CreateBudget} />
          <Route path ="/user" component={CreateUser} />
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
