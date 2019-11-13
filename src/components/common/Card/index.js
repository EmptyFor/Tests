import React from 'react';


import './index.scss'
import homer from '../../../assets/images/Homer_cry.png'

export default props => {

    console.log(props.firstName)
    return <div className="card-wrapp">

        <p className="content-text"> <span>&#10077;</span>{props.text}<span>&#10078;</span></p>
        <div style={{position: 'absolute',bottom: '25%'}}>
            <div className="between-line">&#9812;</div>
        </div>
        <div className="people-info" >
            <img alt="avatar" className="card-img" src={homer} />
            <div className="info-text">
                <span style={{ fontWeight: 'bold' }}>
                    {`${props.firstName} ${props.lastName}`}
                </span>
                <span>
                    Works at <a href="https://uk.wikipedia.org/wiki/Google" rel="noopener noreferrer" target='_blank' style={{ color: 'rgba(0, 51, 92, 0.568)', fontWeight: '550' }}>{`${props.workPlace}`}</a>
                </span>
            </div>

        </div>

    </div>

}


