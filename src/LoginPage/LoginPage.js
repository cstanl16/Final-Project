import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import Axios from 'axios';

export default class LoginPage extends Component{

  onSubmit(e) {
    e.preventDefault();

    window.location = '/signUp';
    
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
        <main>
          <LoginComponent type="Login" function="login"/>
        </main>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
              <label>Dont have an account? </label>
          </div>

          <div className="form-group">
              <input type="submit" value="SignUp" className="btn btn-primary" />
          </div>
      </form>
        
      </div>
    );
    }
}


