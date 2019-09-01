import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Nav from "./nav"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {

        }
    }
    render() {
        const responseGoogle = (response) => {
            console.log(response);
            return (
                <Nav result={response} />
            )
        }
        return (
            <Router>
                <div className="bg-dark py-5 row justify-content-center">
                    <Link to="/nav"><GoogleLogin
                        clientId="473674434100-1gp5a2v0aiugsihkvjmc2fqnav454fq5.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /></Link>
                </div>

            </Router>

        );
    }
}