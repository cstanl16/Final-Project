import React from "react";
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    //const domainVar = process.env.REACT_APP_AUTH0_DOMAIN;
    //const clientIdVar = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const domain = 'dev-3ylt35nh.us.auth0.com';
    const clientId = 'vaGxJCFETocOmTZfw2XxFIKNsoPg4YQY'; //SSH into server to add this into the .env file since its hidden in git

    const onRedirectCallback = (appState) => { 
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory; 