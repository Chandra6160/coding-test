import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: {},
            input : "",
            time : "",
        }
    }
    handleInput = (e) => {
        this.setState({
            input :e.target.value,
        })
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
    onEdit = () => {
        axios({
            method: 'patch',
            url: 'https://reqres.in/api/users',
            params: {
                "id": this.props.match.params.id
            }
        })
            .then((response) => {
                console.log(response.data.updatedAt);
                alert("Updated ")
                this.setState({
                    time : response.data.updatedAt
                })
               
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
                                <label for="exampleInputEmail1">Job</label>
                                <input type="text" name="job" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name " onChange={this.handleInput} value={this.state.input}  />
                            </div>
                            
                            
                        </form>
                        <div class="form-group bg-dark">
                                <button class="btn btn-danger" onClick={this.onEdit}>Update</button>
                                <p class="text-white">{this.state.time}</p>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


