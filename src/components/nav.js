import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            result : this.props.result
        }
    }
    render() {
        console.log("hey"+this.state.props);
        const logout = (response) => {
            console.log(response);
            return (
                <h1>hi</h1>
            )
        }
        return (
            <Router>
                <GoogleLogout
                clientId="473674434100-1gp5a2v0aiugsihkvjmc2fqnav454fq5.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
            </Router>
        )
    }
}