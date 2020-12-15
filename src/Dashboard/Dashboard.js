import React from 'react';
import Chart from './Chart';
import BudgetList from '../components/budget-list.component';
import { useAuth0 } from '@auth0/auth0-react';


export const Dashboard = () => {

  const { user, isAuthenticated } = useAuth0();

  

  return (
    <div>
      <BudgetList username={user.name}/>
        <Chart budgetItems={BudgetList}/>
    </div>
  );
}

export default Dashboard;