import React from 'react';
import './index.scss'



export default props => {

    return   <button onClick={props.onClick} style={props.style} onSubmit={props.onSubmit} className={`arch-rectangle-btn ${props.className}`} >
        {props.text}
    </button>

}