
import React from 'react';
import Axios from 'axios';
import LoginComponent from './LoginComponent';

const axios = require('axios');

function LoginPage() {
/*
  const login = ()  => {
    const data = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    };
    
    axios.post('/api/login:1000', data)
      .then(res => {
        console.log(res);
      });
    
  }

  const signUp = () => {
    const data = {
      username: document.getElementById('username').value,
      password1: document.getElementById('password1').value,
      password2: document.getElementById('password2').value,
    };
    axios.post('/api/login', data)
      .then(res => {
        console.log(res);
      });
  }
*/
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
      <main>
        <LoginComponent type="Login" function="login"/>

        <LoginComponent type="Sign Up" function="signUp"/>
      </main>
      
    </div>
  );
}

export default LoginPage;

