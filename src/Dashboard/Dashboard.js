import React from 'react';
import BudgetList from '../components/budget-list.component';
import { useAuth0 } from '@auth0/auth0-react';


export const Dashboard = () => {

    const { user } = useAuth0();

    return (
        <div className="BudgetList">
            <BudgetList username={user.name}/>
        </div>
    );
}

export default Dashboard;
