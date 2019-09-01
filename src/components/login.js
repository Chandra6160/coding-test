import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            arr: [],
        }
    }
    render() {

        return (

            <div class="container">
                {/* <div class="card card-container col-4">
                    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" class="profile-name-card"></p>
                    <form class="form-signin">
                        <span id="reauth-email" class="reauth-email"></span>
                        <input name="email" onChange={this.handleInputEmail} value={this.props.email} type="text" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        <input name="password" onChange={this.handleInputPassword} value={this.props.password} type="password" id="inputPassword" class="form-control" placeholder="Password" required />

                        <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                </div> */}
                <form className="text-white">
                    <div class="form-group">
                        <label for="exampleInputEmail1">email</label>
                        <input type="text" name="email" onChange={this.props.handleInputEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.props.email} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">password</label>
                        <input type="password" name="password" onChange={this.props.handleInputPassword} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" value={this.props.password} />
                    </div>
                   <Link to="/nav"> <button type="button" class="btn btn-primary" onClick={this.props.onSubmit}>Submit</button></Link>
 
                </form>
            </div>



        );
    }
}