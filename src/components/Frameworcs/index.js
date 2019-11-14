import React, { Component } from 'react';
import { connect } from 'react-redux';


import './index.scss'


class Frameworks extends Component {



    render() {



        return (
            <div className="wrapp">

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
)(Frameworks)