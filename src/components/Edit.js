import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            email: "",
            name: "",
            mobile: "",
            dob: "",
            gender: "",
            place: "",
            pincode: ""

        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: `http://localhost:3002/user/show/${this.props.match.params.id}`,
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    arr: response.data.user,
                    email: response.data.user[0].email,
                    name: response.data.user[0].name,
                    mobile: response.data.user[0].mobile,
                    dob: response.data.user[0].dob,
                    gender: response.data.user[0].gender,
                    place: response.data.user[0].addresses[0].place,
                    pincode: response.data.user[0].addresses[0].pincode
                });

            })
            .catch((err) => alert(err))
    }
    onEdit = () => {
        const ob = {
            email: this.state.email,
            name: this.state.name,
            mobile: this.state.mobile,
            dob: this.state.dob,
            gender: this.state.gender,
            addresses: [{
                place: this.state.place,
                pincode: this.state.pincode
            }]
        }
        console.log(ob)
        axios({
            method: 'post',
            url: `http://localhost:3002/user/edit/${this.props.match.params.id}`,
        })
        .then((response) => {
            alert("Updated ")
            console.log(response);
        })
        .catch((err) => alert(err))
    }

    render() {
        // console.log(this.state.name)
        return (
            <React.Fragment>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <form className="text-white bg-dark ">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.state.email} onChange={this.handleInput} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" value={this.state.name} onChange={this.handleInput} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile</label>
                                <input type="text" name="mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile No." value={this.state.mobile} onChange={this.handleInput} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">DoB</label>
                                <input type="text" name="dob" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Date of Birth" value={this.state.dob} onChange={this.handleInput} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Gender</label>
                                <input type="text" name="gender" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter gender details" value={this.state.gender} onChange={this.handleInput} />
                            </div>
                            <label for="exampleInputEmail1">Adresses</label>
                            <br />

                            <label for="exampleInputEmail1">Address1</label>
                            <div class="form-group">
                                <label for="exampleInputEmail1">place</label>
                                <input type="text" name="place" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter place" value={this.state.place} onChange={this.handleInput} />
                                <label for="exampleInputEmail1">pincode</label>
                                <input type="text" name="pincode" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter pincode" value={this.state.pincode} onChange={this.handleInput} />
                            </div>

                            <Link to="/nav/home"> <button type="submit" class="btn btn-primary" onClick={this.onEdit}>Edit</button> </Link>

                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


