import React from "react";
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    //const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    //const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const domain = "dev-3ylt35nh.us.auth0.com";
    const clientId = "PkJFJGyBpPfPSSrv1MvrSBS9ygoi8kzP";
    console.log(domain);
    console.log(clientId);

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