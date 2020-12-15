import React, { Component } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateBudget extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            cost: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/users')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }    
            });
        }

        

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeCost(e) {
        this.setState({
            cost: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date //MAKE THIS GET TODAYS DATE
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const budget = {
            username: this.state.username,
            description: this.state.description,
            cost: this.state.cost,
            date: this.state.date
        }

        console.log(budget);

        Axios.post('http://localhost:5000/budget/add', budget)
            .then(res => console.log(res.data));

        //window.location = '/dashboard'; //TAKES THE USER BACK TO dashboard
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
      }
    

    render() {
        return (
            <div>
                <h3>Create a new Budget Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref={(input) => { this.textInput = input; }} required className="form-control" id={this.state.username} onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option key={user} value={user}> 
                                            {user}
                                        </option>;
                                })
                            }
                        </select>
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
                        <input type="submit" value="Create New Budget Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}