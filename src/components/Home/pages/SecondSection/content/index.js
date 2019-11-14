import React from 'react';

import './index.scss'
import footer_homer from '../../../../../assets/images/homer_&gun.png'

const data = [
    {
        title: 'Alleviate your nervousness around interviewing',
        text: 'Simulate the experience of a live interview by being interviewed by a fellow engineer in a no-risk environment. Completing mock technical interviews will help you overcome difficulties in speaking, reasoning, and coding a solution by practicing with fellow engineers in the same situation.'
    },
    {
        title: 'Showcase your understanding of frontend-specific knowledge and concepts',
        text: 'Sharpening your ability to discuss the implementation of a solution to a frontend JavaScript problem or design challenge is critical to demonstrating your knowledge of HTML, CSS, and JavaScript.'
    },
    {
        title: 'Defend your solution and adapt to new requirements',
        text: 'The process of explaining and defending a design is an extremely important skill for developers. A great candidate will be able to provide a working solution, adapt to new requirements, and defend their choices with valid explanations.'
    },
]

const footerImages = ['IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG']

const SecondSectionContent = () => {

    return <div className="second-content">
        <p className="content-title">Three reasons why you should practice frontend quize</p>
        <div className="content-container">
            {data.map((item, index) => {
                return <div key={index} className="content-row">
                    <span className="content-num">{`0${index + 1}`}</span>
                    <div className="content-info">
                        <p className="title">{item.title}</p>
                        <p className="text">{item.text}</p>
                    </div>
                </div>
            })}
        </div>
        <div className="content-footer">
            {footerImages.map(item => {
                return <span>{item}</span>
            })}

            <img className="content-footer-homer" alt="footer-homer" src={footer_homer} />
        </div>

    </div>

}

export default SecondSectionContent;
