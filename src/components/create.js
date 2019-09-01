import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <React.Fragment>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <form className="text-white bg-dark ">
                            <div class="form-group">
                                <label for="exampleInputCode">ID</label>
                                <input type="text" class="form-control" id="exampleInputCode" aria-describedby="emailHelp" placeholder="Enter Code" name="id" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="text" name="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Last Name</label>
                                <input type="text" name="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter location" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Avatar URL</label>
                                <input type="text" name="mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobile no." />
                            </div>
                            <Link to="/"> <button type="button" class="btn btn-primary" onClick={this.props.onSubmit}>Create</button></Link>

                        </form>
                    </div>
                </div>




            </React.Fragment>
        );
    }
}


