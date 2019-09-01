import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: {},
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            params: {
                "id": this.props.match.params.id
            }

        })
            .then((response) => {
                this.setState({
                    arr: response.data.data,
                });
               
            })
            .catch((err) => alert(err))
    }
    onDelete = () => {
        axios({
            method: 'DELETE',
            url: 'https://reqres.in/api/users',
            params: {
                "id": this.props.match.params.id
            }

        })
            .then((response) => {
               
                alert("Deleted ")
               
            })
            .catch((err) => alert(err))
    }
   
    render() {
        
        return (
            <React.Fragment>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <form className="text-white bg-dark ">
                            
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" value={this.state.arr.first_name} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Last Name</label>
                                <input type="text" name="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name " value={this.state.arr.last_name} />
                            </div>
                            
                        </form>
                        <div class="form-group bg-dark">
                                <button class="btn btn-danger" onClick={this.onDelete}>Delete</button>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


