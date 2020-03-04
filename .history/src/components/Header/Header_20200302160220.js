import React, { Component } from 'react';
import Logo from './logo.png';
// import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='logo' src={Logo} alt='logo' />
            </div>
        )
    }
}