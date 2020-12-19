import React, { Component } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  { withAuth0} from '@auth0/auth0-react';
import { Auth0Context } from '@auth0/auth0-react';

class CreateBudget extends Component {

    constructor(props) {
        super(props);

        
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '', 
            description: '',
            cost: 0,
            date: new Date(),
        };
    };

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    };

    onChangeCost(e) {
        this.setState({
            cost: e.target.value
        });
    };

    onChangeDate(date) {
        this.setState({
            date: date //MAKE THIS GET TODAYS DATE
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const { user } = this.context;
        const name = user.name;

        const budget = {
            username: name,
            description: this.state.description,
            cost: this.state.cost,
            date: this.state.date
        };

        console.log(budget);

        Axios.post('https://final-project-node-server-pbfph.ondigitalocean.app/budget/add', budget)
            .then(res => {
                console.log(res.data);
                window.location = '/dashboard';
            });
    };

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    };
    
    static contextType = Auth0Context;
    
    
    render() {
        
        const { user } = this.context;
        const name = user.name;
        
        return (
            <div className="createBudgetDiv">
                <h3 className="createBudgetH3">Create a new Budget Item</h3>
                <form className="createBudgetForm" onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" className="createBudgetInput" defaultValue={name} readOnly/>
                    </div>

                    <div>
                        <label>Desc: </label>
                        <input type="text" className="createBudgetInput" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>

                    <div>
                        <label>Cost: </label>
                        <input type="text" className="createBudgetInput" value={this.state.cost} onChange={this.onChangeCost}/>
                    </div>

                    <div>
                        <label>Date: </label>
                            <DatePicker className="createBudgetInput" selected={this.state.date} onChange={this.onChangeDate}/>
                    </div>

                    <div>
                        <input type="submit" className="createBudgetButton" value="Create New Budget Item" />
                    </div>
                </form>
            </div>
        );
    };
};

export default withAuth0(CreateBudget);