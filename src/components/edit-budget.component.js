import React, { Component } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Auth0Context } from '@auth0/auth0-react';

export default class EditBudget extends Component {

    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            cost: 0,
            date: new Date(),
        }
    }

    componentDidMount(id) {

        Axios.get('https://final-project-node-server-pbfph.ondigitalocean.app/budget/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    cost: response.data.cost,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

        //console.log(budget);

        Axios.post('https://final-project-node-server-pbfph.ondigitalocean.app/budget/update/' + this.props.match.params.id, budget)
            .then(res => console.log(res.data))
            .catch(function (error) {
                console.log(error);
            })

        //window.location = '/dashboard'; //When implemented the edit doesnt get posted
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
      }

      static contextType = Auth0Context;

    

    render() {

        const { user } = this.context;
        const name = user.name;

        return (
            <div>
                <h3>Edit This Budget Item</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" defaultValue={name} readOnly/>
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" placeholder={this.state.description} value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>

                    <div className="form-group">
                        <label>Cost: </label>
                        <input type="text" className="form-control" placeholder={this.state.cost} value={this.state.cost} onChange={this.onChangeCost}/>
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit This Budget Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}