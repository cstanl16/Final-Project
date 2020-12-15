import React, {Component} from 'react';
import {Doughnut, Bar, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels:['label1', 'label2', 'label3', 'label4', 'label5'],
                datasets:[
                    {
                        label:'Names Budget',

                        data:[
                            123,
                            234,
                            345,
                            456,
                            567
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
}
export default Chart;