import React, { Component } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  { useAuth0, withAuth0} from '@auth0/auth0-react';
import { Auth0Context } from '@auth0/auth0-react';
import Dashboard from '../Dashboard/Dashboard';

class CreateBudget extends Component {

    constructor(props) {
        super(props);

        
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '', //CHANGE USERNAME TO EMPTY
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
            .then(res => console.log(res.data));

        //window.location = '/dashboard'; //when implemented the budget item isnt created
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
            <div>
                <h3>Create a new Budget Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" defaultValue={name} readOnly/>
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>

                    <div className="form-group">
                        <label>Cost: </label>
                        <input type="text" className="form-control" value={this.state.cost} onChange={this.onChangeCost}/>
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" defaultValue="Create New Budget Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    };
};

export default withAuth0(CreateBudget);