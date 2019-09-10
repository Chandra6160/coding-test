import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            name:"",
            mobile : "",
            dob : "",
            gender:"",
            place:"",
            pincode:"",
            arr:[]
        }
        this.handleInput=(e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
            
        }
        this.onSubmit = () => {
            const ob={
                email : this.state.email,
                name:this.state.name,
                mobile : this.state.mobile,
                dob:this.state.dob,
                gender :this.state.gender,
                addresses : [{
                    place :this.state.place,
                    pincode :this.state.pincode
                }]
            }
            
            var body = ob
            console.log(body)
            axios({
                method: 'POST',
                url: 'http://localhost:3002/users/create',
                data : body
            })
            .then((response) =>{
                console.log(response);	
            })
            .catch((err) => alert(err))
        }
    }

    render() {

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
                                <input type="text" name="dob" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Date of Birth" value={this.state.dob} onChange={this.handleInput}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Gender</label>
                                <input type="text" name="gender" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter gender details" value={this.state.gender} onChange={this.handleInput} />
                            </div>
                            <label for="exampleInputEmail1">Adresses</label>
                            <div class="form-group">
                                <label for="exampleInputEmail1">place</label>
                                <input type="text" name="place" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter place" value={this.state.place} onChange={this.handleInput} />
                                <label for="exampleInputEmail1">pincode</label>
                                <input type="text" name="pincode" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter pincode" value={this.state.pincode} onChange={this.handleInput} />
                            </div>
                            {/* <div class="form-group">
                                <label for="exampleInputEmail1">Avatar URL</label>
                                <input type="text" name="mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobile no." />
                            </div> */}
                            <Link to="/nav/home"> <button type="button" class="btn btn-primary" onClick={this.onSubmit}>Create</button> </Link>

                        </form>
                    </div>
                </div>




            </React.Fragment>
        );
    }
}


