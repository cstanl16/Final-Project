import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(user);

        Axios.post('https://final-project-node-server-pbfph.ondigitalocean.app/users/add', user)
            .then(res => {
                console.log(res.data)
                window.location = '/dashboard';
            });
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
      }
    

    render() {
        return (
            <div>
                <h3>Create a new account</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create New Account" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}