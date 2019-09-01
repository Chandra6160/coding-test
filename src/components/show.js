import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    getValueId=()=>{
        let val= this.props.array.find((ele)=>{
            return this.props.match.params.id == ele.id
        });
        if(val!==undefined)
        {
            return  val=val.id
        }
    }
    getValueFirst=()=>{
        let val= this.props.array.find((ele)=>{
            return this.props.match.params.id == ele.id
        });
        if(val!==undefined)
        {
            return  val=val.first_name
        }
    }
    getValueLast=()=>{
        let val= this.props.array.find((ele)=>{
            return this.props.match.params.id == ele.id
        });
        if(val!==undefined)
        {
            return  val=val.last_name
        }
    }
    getValueEmail=()=>{
        let val= this.props.array.find((ele)=>{
            return this.props.match.params.id == ele.id
        });
        if(val!==undefined)
        {
            return  val=val.email
        }
    }
    getValueAvatar=()=>{
        let val= this.props.array.find((ele)=>{
            return this.props.match.params.id == ele.id
        });
        if(val!==undefined)
        {
            return  val=val.avatar
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
                                <input type="text" class="form-control" id="exampleInputCode" aria-describedby="emailHelp" placeholder="Enter id" name="id" value={this.getValueId()} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" value={this.getValueFirst()}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="text" name="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name " value={this.getValueLast()} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Last Name</label>
                                <input type="text" name="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.getValueEmail()} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Avatar</label>
                                {/* <input type="text" name="mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobile no." /> */}
                                <img src={this.getValueAvatar()} />
                            </div>
                            

                        </form>
                    </div>
                </div>




            </React.Fragment>
        );
    }
}


