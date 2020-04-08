import React, { Component } from "react";
import Router from 'next/router'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            company: '',
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            company: this.state.company,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            Router.replace("/login")
        })
        .catch(err => {
            console.log("Error",err)
        })


    }

    render() {
        return (
                <div className="row m-3 p-3">
                    <div className="col-lg-6 col-md-10 rounded-lg bg-light mx-auto shadow-lg">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label htmlFor="name">Company Name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="company" 
                                    placeholder="Your Company"
                                    value= {this.state.company} 
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">First name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="first_name" 
                                    placeholder="First name"
                                    value= {this.state.first_name} 
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Last name" 
                                    value= {this.state.last_name} 
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input 
                                    type="tel" 
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone Number" 
                                    value= {this.state.phone} 
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email"
                                    placeholder="Enter email" 
                                    value= {this.state.email}
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                    placeholder="Enter password"
                                    value= {this.state.password}
                                    onChange= {this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="text-right">
                                Already registered <a href="/login">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Register