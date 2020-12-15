import React from 'react';

function LoginComponent(props) {
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
              <button onClick="">{props.type}</button>
            </div>
        </div>
    </div>
  );
}

export default LoginComponent;
