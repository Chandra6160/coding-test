import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home.js";
import HomeSecond from "./home2";
import Create from "./create";
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token:this.props.token,
        }
    }
    render() {

        return (
            <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">{this.props.token}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to ="/nav/home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/nav/create" class="nav-link" href="#">Create <span class="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            <Route path ="/nav/create" component={Create} />
            <Route path="/nav/home" component={Home} />
            <Route path="/nav/homesecond" component={HomeSecond} />

            </React.Fragment>
        )
    }
}