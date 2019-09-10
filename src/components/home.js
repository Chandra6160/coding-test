import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "./home.js";
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3002/home',
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    arr: response.data.users,
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        console.log(this.state.arr)
        return (
            <React.Fragment>
                <div className="container bg-dark">
                    <div className="row justify-content-center">
                        <h1 className="text-white d-4">List of Users</h1>
                    </div>
                    <div className="row">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">DoB</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Adresses</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arr.map((e,index) => {
                                    return (
                                        <tr >
                                            <td>
                                                <Link to={`/nav/show/${e._id}`}>{index+1}</Link>
                                            </td>
                                            <td scope="col">{e.name}</td>
                                            <td scope="col">{e.email}</td>
                                            <td scope="col">{e.mobile}</td>
                                            <td scope="col">{e.dob}</td>
                                            <td scope="col">{e.gender}</td>
                                            { e.addresses ? (e.addresses.map((el) => {
                                                return (<p>Place:{el.place}<br/>PIN : {el.pincode}</p>)
                                            })) : (<p>Adress Not available</p>)}
                                            <td scope="col"><Link to={`/nav/edit/${e._id}`} className="p-2">link</Link></td>
                                            <td scope="col"><Link to={`/nav/delete/${e._id}`} className="p-2">link</Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <nav aria-label="Page navigation example ml-auto">
                            <ul class="pagination">
                            <li class="page-item"><Link to="/nav/home" class="page-link" >Previous</Link></li>
                                <li class="page-item"><Link to="/nav/home" class="page-link" >1</Link></li>
                                <li class="page-item"><Link to="/nav/homesecond" class="page-link" >2</Link></li>
                                <li class="page-item"><Link to="/nav/homesecond" class="page-link" >Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
