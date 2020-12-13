import React from 'react';
const axios = require('axios');

function LoginComponent(props) {

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

  return (
    <div>
        <div className="container-fluid">
            <h1>{props.type}</h1>

            <div className="row">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"></input>
            </div>

            <div className="row">
                <label htmlFor="password">Password </label>
                <input type="password" name="password" id="password"></input>
            </div>

            <div>
              <button onClick={login}>{props.type}</button>
            </div>
        </div>
    </div>
  );
}

export default LoginComponent;
