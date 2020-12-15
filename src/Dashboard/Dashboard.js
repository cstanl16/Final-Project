import React from 'react';
import Chart from './Chart';
import BudgetList from '../components/budget-list.component';



function Dashboard() {
  return (
    <div>
      <BudgetList/>
        <Chart budgetItems={BudgetList}/>
    </div>
  );
}

export default Dashboard;
