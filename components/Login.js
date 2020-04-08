import React, { Component } from 'react'
import { login } from './UserFunctions'
import Router from 'next/router'
import Container from 'react-bootstrap/Container'

const vertCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    
}
// Router.replace("/profile")

class Login extends Component {
    constructor() {
        super()
        this.state = {
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
    onSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                Router.replace("/profile")
                console.log(res)
            }
        })
    }

    render() {
        return (<Container>
            <div className="row m-3 p-5">
                <div className="col-lg-6 col-md-10 rounded-lg bg-light mx-auto shadow-lg p-3">
                    <form onSubmit={this.onSubmit}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3">Submit</button>

                    </form>
                </div>
            </div>
            </Container>)
    }
}

export default Login
