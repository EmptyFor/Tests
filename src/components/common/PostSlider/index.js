import React, { Component } from 'react';

import Card from '../Card';
import posts from '../../../db/posts'

import './index.scss'



export default class PostSlider extends Component {

    renderCardContent = () => {
        return posts.map((item, index) => {
            return <Card key={index}
                firstName={item.firstName}
                lastName={item.lastName}
                workPlace={item.workPlace}
                text={item.text}
            />
        })
    }

    render() {


        return (
            <div className="slider-wrapp">
                {this.renderCardContent()}
            </div>
        )
    }
}


