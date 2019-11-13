import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import LayoutInput from '../common/Inputs/LayoutInput';
import RectangleBtn from '../common/Buttons/RectangleBtn';
import links from '../../config/links'

import './index.scss'


class SignIn extends Component {
    state = {
        firstName: '',
        lastName: '',
        login: '',
        password: '',
        phone: '',
        isDone: false
    };



    handleChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        const { firstName, lastName, phone, login } = this.state;

        localStorage.setItem('user_info', [firstName, lastName, login, phone]);
        localStorage.setItem('token', 'asfdk098412jkglkp41fadsr138fzq0qp0993');

        this.setState({
            isDone: true
        })

        // this.props.actions.signIn()
    }

    render() {
        const { isDone } = this.state

        if (isDone) {
            return <Redirect to={links.home} />
        }


        return (
            <div className="login-wrapp">
                <form className="login-wrapp sign-in">
                    <p className="form-header">Sign In</p>
                    <div className="name-wrapp">
                        <LayoutInput name="firstName" onChange={this.handleChange} className="name-input" placeholder="First Name" />
                        <LayoutInput name="lastName" onChange={this.handleChange} className="name-input" placeholder="Last name" />
                    </div>
                    <LayoutInput name="login" onChange={this.handleChange} placeholder="Login / Email" />
                    <LayoutInput name="password" onChange={this.handleChange} type="password" placeholder="Password" />
                    {/* <LayoutInput placeholder="Confirm Password" /> */}
                    <LayoutInput name="phone" onChange={this.handleChange} placeholder="Phone" />
                    <RectangleBtn onClick={this.handleSubmit} text="Sign In" style={{ width: "320px" }} />
                </form>
            </div>
        )
    }
}


export default SignIn