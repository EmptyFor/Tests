import React from 'react';

import './index.scss'
import orange_wave from '../../../../assets/images/orange_wave.png';
import homer_xhand from '../../../../assets/images/Homer_XHand.png'


export default () => {

   return <section className="section first-section">
        <p className="welcome-title">Hello %username, weclome!</p>
        <div className="container">
            <img alt="hmr-x" src={homer_xhand} />
            <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <img alt="vw" className="wave-bg" src={orange_wave} />
    </section>

}


