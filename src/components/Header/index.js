import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import links from '../../config/links'

import './index.scss'
import header_logo from '../../assets/images/header_logo.png'

export default props => {
    return <header className="header">
        <img alt="india" src={header_logo} />
        {
            props.auth ? <Link to={`/${props.route}`}><span>{props.text}</span></Link>
                : <>
                    <div className="header-nav">
                        <NavLink to={links.home}><span>JavaScript</span></NavLink>
                        <NavLink to={links.home}><span>HTMl</span></NavLink>
                        <NavLink to={links.home}><span>CSS</span></NavLink>
                        <NavLink to={links.home}><span>Frameworks</span></NavLink>
                        <NavLink to={links.home}><span>Articles</span></NavLink>
                    </div>
                    {/* <div className="header-profile"> */}
                    <button className="header-profile" >%username</button>
                    {/* </div> */}
                </>
        }
    </header>


}

