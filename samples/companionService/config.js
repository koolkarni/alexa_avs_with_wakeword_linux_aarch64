/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: "amzn1.application-oa2-client.9a8e2636a63e4207a5bd6dfa7ecec472",
    clientSecret: "e3acb25f31a3acdef90d3319d39b509c4aa21a0ce2253cb5f96374a5fd33f379",
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: "amazon.com",
    lwaApiHost: "api.amazon.com",
    validateCertChain: true,
    sslKey: "/home/nik/Desktop/alexa-avs-sample-app/samples/javaclient/certs/server/node.key",
    sslCert: "/home/nik/Desktop/alexa-avs-sample-app/samples/javaclient/certs/server/node.crt",
    sslCaCert: "/home/nik/Desktop/alexa-avs-sample-app/samples/javaclient/certs/ca/ca.crt",
    products: {
        "windowspi": ["123456789"],
    },
};

module.exports = config;
