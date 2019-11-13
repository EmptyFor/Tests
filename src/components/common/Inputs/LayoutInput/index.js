import React from 'react';
import './index.scss'


export default props => {
    return <div className="arch-input-wrapp">
        <input onChange={props.onChange} required="required" type={props.type || 'text'} name={props.name} className={`arch-default-input`} />
        <label className="placeholder-label" >{props.placeholder || "placeholder"}</label>
    </div>
}



