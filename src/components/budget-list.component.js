import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Doughnut, Bar} from 'react-chartjs-2';

export const Budget = (props) => {
    return(
        <tr className="budgetListRow">
            <td className="budgetListCell">{props.budget.description}</td>
            <td className="budgetListCell">{props.budget.cost}</td>
            <td className="budgetListCell">{props.budget.date.substring(0,10)}</td>
            <td className="BudgetListCell">
            <Link to={"/edit/"+props.budget._id} className="budgetListLinks">edit</Link> | <a className="budgetListLinks" href="#" onClick={() => { props.deleteBudget(props.budget._id) }}>delete</a>
            </td>
        </tr>
    )
}

export default class BudgetList extends Component {
    constructor(props) {
        super(props);

        this.deleteBudget = this.deleteBudget.bind(this);
        this.state = {
            totalPrice: 0,
            chartData: {
                labels: [],
                datasets:[
                    {
                        label:'Monthly Budget',

                        data:[
                            
                        ],
                    
                        backgroundColor:[
                            'rgba(227, 50, 85, 0.6)',
                            'rgba(186, 99, 65, 1)',
                            'rgba(217, 252, 33, 0.8)',
                            'rgba(133, 73, 159, 0.6)',
                            'rgba(103, 240, 120, 0.4)',
                            'rgba(65, 185, 214, 0.8)',
                            'rgba(193, 11, 94, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)'

                        ],

                        borderWidth:1,
                        borderColor:'#777',
                        hoverBorderWidth:3,
                        hoverBorderColor:'#000'
                    }
                ],
            },
            chartDataYearly: {
                labels: [],
                datasets:[
                    {
                        label:'Annual Budget',

                        data:[
                            
                        ],
                    
                        backgroundColor:[
                            'rgba(227, 50, 85, 0.6)',
                            'rgba(186, 99, 65, 1)',
                            'rgba(217, 252, 33, 0.8)',
                            'rgba(133, 73, 159, 0.6)',
                            'rgba(103, 240, 120, 0.4)',
                            'rgba(65, 185, 214, 0.8)',
                            'rgba(193, 11, 94, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)'

                        ],

                        borderWidth:1,
                        borderColor:'#777',
                        hoverBorderWidth:3,
                        hoverBorderColor:'#000'
                    }
                ],
            },
            budgetItems: []
        };
    }

    render() {
        return (
        <>
            <div className="BudgetList-Items">
                <h3>Budget Items</h3>
                <table className="budgetTable">
                    <tbody>
                        <tr className="budgetListRow">
                            <th className="budgetListHeadCell">Description</th>
                            <th className="budgetListHeadCell">Cost</th>
                            <th className="budgetListHeadCell">Date</th>
                            <th className="budgetListHeadCell">Actions</th>
                        </tr>
                        { this.budgetList() }
                        <tr className="budgetListRow">
                            <th className="budgetListHeadCell">Total: </th>
                            <th className="budgetListHeadCell">{this.state.totalPrice}</th>
                            <th className="budgetListHeadCell">Monthly</th>
                            <th className="budgetListHeadCell"></th>
                        </tr>
                    </tbody>
                </table>
 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Create a new Budget Item?</label>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="New Budget Item" className="newBudgetItem" />
                    </div>
                </form>

            </div>
            <Bar 
            data={this.state.chartData}
            options={
                {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }
            />

            <Bar
            data={this.state.chartDataYearly}
            options={
                {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }
            />

            <Doughnut 
            data={this.state.chartData}
            options={
                {

                }
            }
            />
        </>
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
        });

    }

    deleteBudget(id) {
        axios.delete('https://final-project-node-server-pbfph.ondigitalocean.app/budget/'+id)
        .then(response => { 
            console.log(response.data);
            window.location = '/dashboard';
        }); 
    }

    filterBudgetList() {  
        const name = this.props.username;
        this.setState({
            budgetItems: this.state.budgetItems.filter(currentbudget => currentbudget.username.includes(`${name}`) )
        });
    }

    budgetList() {
        //FIX THIS TO WHERE CODE ISNT DIRECTLY EDITING THE STATE< USE SETSTATE
        //when set state is used, error occurs not being able to find chartData
        this.state.chartData.labels = []; 
        this.state.chartData.datasets[0].data = []
        this.state.chartDataYearly.labels = []; 
        this.state.chartDataYearly.datasets[0].data = []
        this.state.totalPrice = 0;

        this.state.budgetItems.forEach(item => {
            this.state.chartData.datasets[0].data.push(item.cost);
            this.state.totalPrice = this.state.totalPrice + item.cost;
            this.state.chartData.labels.push(item.description);
            this.state.chartDataYearly.datasets[0].data.push(item.cost*12);
            this.state.chartDataYearly.labels.push(item.description);
         })

        return this.state.budgetItems.map(currentbudget => {
           return <Budget budget={currentbudget} deleteBudget={this.deleteBudget} key={currentbudget._id}/>;
        });
    }

}