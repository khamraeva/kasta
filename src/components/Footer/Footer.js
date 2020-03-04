import React, { Component } from 'react';
import KastaLogo from './kastalogo.png';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img className='kasta-logo' src={KastaLogo} alt='kasta logo' />
            </div>
        )
    }
}