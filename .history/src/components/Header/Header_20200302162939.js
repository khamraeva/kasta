import React, { Component } from 'react';
import Logo from './logo.png';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='logo' src={Logo} alt='logo' />
                <p className='topay'>До оплати</p>
                <p className='amount'>123 284 грн</p>
            </div>
        )
    }
}