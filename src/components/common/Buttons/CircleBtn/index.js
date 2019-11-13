import React from 'react';
import './index.scss'



export default props => {

    return <div onClick={props.onClick} className={`arch-circle-btn ${props.type} ${props.className}`} type={props.type}>
        {props.type === 'next' ? <span className={`arch-circle-btn-arrow ${props.type}`}></span>
            : props.type === 'prev' ? <span className={`arch-circle-btn-arrow ${props.type}`}></span>
                : props.type === 'plus' ? <span className={`arch-circle-btn-arrow ${props.type}`}></span> : null}
    </div>

}