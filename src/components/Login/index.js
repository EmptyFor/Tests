import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import LayoutInput from '../common/Inputs/LayoutInput';
import RectangleBtn from '../common/Buttons/RectangleBtn';

import './index.scss'



class Login extends Component {
    state = {
        login: '',
        password: '',
        error: {
            status: false,
            text: ''
        }
    };



    handleChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        const { login, password } = this.state

        if (login.length && password.length && localStorage.getItem('user_info')) {
            localStorage.setItem('token', 'aaoiidghawellkrtn3wqd1260990ds621')
        } else {
            this.setState({
                error: {
                    status: true,
                    text: 'Incorrect email/password.'
                }
            })
        }

    }

    render() {
        const { error } = this.state
        if (localStorage.getItem('token')) {
            return <Redirect to='/' />
        }



        return (
            <div className="login-wrapp">
                {/*  */}
                <form className="login-wrapp">
                    <p className="form-header">Log In</p>
                    <LayoutInput onChange={this.handleChange} placeholder="Login / Email" />
                    <LayoutInput onChange={this.handleChange} type="password" placeholder="Password" />
                    {error.status ? <label className="error-label">{error.text}</label> : null}
                    <RectangleBtn onClick={this.handleSubmit} text="Log In" style={{ width: "320px" }} />
                </form>
            </div>
        )
    }
}


export default Login