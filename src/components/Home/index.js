import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import FirstSection from './pages/FirstSection';
import SecondSection from './pages/SecondSection';

import './index.scss'


class Home extends Component {

    constructor() {
        super();
        this.token = localStorage.getItem('token')
    }

    state = {

    }




    render() {

        if (!this.token) {
            return <Redirect to='/login' />
        }


        return (
            <div className="wrapp">
                <FirstSection />
                <SecondSection />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        index: state.main
    }),
    dispatch => ({
    })
)(Home)