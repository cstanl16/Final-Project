import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from './components/private-route';

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import BudgetList from './components/budget-list.component';
import EditBudget from './components/edit-budget.component';
import CreateBudget from './components/create-budget.component';
import Loading from './components/Loading';

const App = () => {
    const { isLoading } = useAuth0();
    if (isLoading) {
        return <Loading/>
    }

    return (
        <Router>
            <Menu/>
            <Hero/>
            <div className = "mainContainer">
                <Switch>
                <PrivateRoute path="/dashboard" component={ Dashboard }/>
                <PrivateRoute path ="/budgetList" exact component={BudgetList} /> 
                <PrivateRoute path ="/edit/:id" component={EditBudget} />
                <PrivateRoute path ="/create" component={CreateBudget} />
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
