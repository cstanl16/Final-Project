import React, {Component} from 'react';
import {Doughnut, Bar, Pie} from 'react-chartjs-2';
import Axios from 'axios';
import { Auth0Context } from '@auth0/auth0-react';

class Chart extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.name)

        this.state = {
            budgetItems: {},
            descriptions: [],
            cost: [],

            chartData: {
                labels:[],
                datasets:[
                    {
                        label:'Names Budget',

                        data:[
                            
                        ],
                    
                        backgroundColor:[
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
            }
        }
    }

    render() {
        return (
            <>
            <Pie
                data={this.state.chartData}
                options={
                    {

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
            <Bar 
                data={this.state.chartData}
                options={
                    {

                    }
                }
            />
            </>
        );
    }

    static contextType = Auth0Context;

    componentDidMount() {
        Axios.get('https://final-project-node-server-pbfph.ondigitalocean.app/budget/') //username/'+this.props.username
        .then(response => {
            this.setState({ budgetItems: response.data })
            this.filterBudgetList();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    filterBudgetList() {  
        const { user } = this.context;
        const name = user.name;

        this.setState({
            budgetItems: this.state.budgetItems.filter(currentbudget => currentbudget.username.includes(`${name}`) )
        })
    }
}
export default Chart;