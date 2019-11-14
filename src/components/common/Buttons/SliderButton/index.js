import React from 'react';
import './index.scss'



export default props => {

    return <div onClick={props.onClick} style={props.style} className={`arch-slider-btn ${props.type} ${props.className}`} type={props.type}>
        {props.type === 'next' ? <span className={`arch-slider-btn-arrow ${props.type}`}></span>
            : props.type === 'prev' ? <span className={`arch-slider-btn-arrow ${props.type}`}></span> : null}
    </div>

}