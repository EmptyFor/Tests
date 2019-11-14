import React, { Component } from 'react';

import './index.scss';
import PostSlider from '../../../common/PostSlider';
import SecondSectionContent from './content/index';


export default class SecondSection extends Component {


    render() {

        return (
            <section className="section second-section">
                <PostSlider />
                <SecondSectionContent />
            </section>
        )
    }
}


