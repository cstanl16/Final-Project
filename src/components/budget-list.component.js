import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Chart from '../Dashboard/Chart'

const Budget = props => (
    <tr>
        <td>{props.budget.username}</td>
        <td>{props.budget.description}</td>
        <td>{props.budget.cost}</td>
        <td>{props.budget.date.substring(0,10)}</td>
        <td>
        <Link to={"/edit/"+props.budget._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBudget(props.budget._id) }}>delete</a>
        </td>
    </tr>
)

export default class BudgetList extends Component {
    constructor(props) {
        super(props);

        const name = props.username;
        this.deleteBudget = this.deleteBudget.bind(this);
        //this.filterBudgetList = this.filterBudgetList(this);

        this.state = {
            budgetItems: []
        };
    }

    render() {
        return (
        <div>

            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Create a new Budget Item?</label>
                </div>

                <div className="form-group">
                    <input type="submit" value="New Budget Item" className="btn btn-primary" />
            </div>
            </form>


            <h3>Budget Items</h3>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Date</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { this.budgetList() }
            </tbody>
            </table>
        </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
    
        window.location = '/create';
        
      }

    componentDidMount() {
        axios.get('https://final-project-node-server-pbfph.ondigitalocean.app/budget/') //username/'+this.props.username
        .then(response => {
            this.setState({ budgetItems: response.data })
            this.filterBudgetList();
        })
        .catch((error) => {
            console.log(error);
        })

    }

    deleteBudget(id) {
        axios.delete('https://final-project-node-server-pbfph.ondigitalocean.app/budget/'+id)
        .then(response => { console.log(response.data)});

        this.setState({
            budgetItems: this.state.budgetItems.filter(el => el._id !== id)
        })
    }

    filterBudgetList() {  
        const name = this.props.username;
        this.setState({
            budgetItems: this.state.budgetItems.filter(currentbudget => currentbudget.username.includes(`${name}`) )
        })
    }

    budgetList() {
        return this.state.budgetItems.map(currentbudget => {
        return <Budget budget={currentbudget} deleteBudget={this.deleteBudget} key={currentbudget._id}/>;
        })
    }

}