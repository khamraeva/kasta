import React, { Component } from 'react';
import Logo from './logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img className='kasta-logo' src={Logo} alt='kasta logo' />
            </div>
        )
    }
}