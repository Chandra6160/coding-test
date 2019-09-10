import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: `http://localhost:3002/user/show/${this.props.match.params.id}`,
            // params: {
            //     "id": this.props.match.params.id
            // }

        })
            .then((response) => {
                console.log(response)
                this.setState({
                    arr: response.data.user,
                });
            })
            .catch((err) => alert(err))
    }
   
    render() {
        // console.log(ob.id,ob.avatar)
        console.log(this.state.arr)
        console.log(typeof (this.state.arr))
        return (
            <React.Fragment>
                
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
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arr.map((e,index) => {
                                    return (
                                        <tr >
                                            <td>
                                                {e._id}
                                            </td>
                                            <td scope="col">{e.name}</td>
                                            <td scope="col">{e.email}</td>
                                            <td scope="col">{e.mobile}</td>
                                            <td scope="col">{e.dob}</td>
                                            <td scope="col">{e.gender}</td>
                                            { e.addresses ? (e.addresses.map((el) => {
                                                return (<p>Place:{el.place}<br/>PIN : {el.pincode}</p>)
                                            })) : (<p>Adress Not available</p>)}
                                           
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    
            </React.Fragment>
        );
    }
}


