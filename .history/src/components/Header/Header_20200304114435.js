import React, { Component } from 'react';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='logo' src={Logo} alt='logo' />
                <p className='topay'>До оплати</p>
                <p className='amount'>123 284 грн</p>
                <span className='times'><FontAwesomeIcon icon={faTimes} style={{color: 'rgb(105, 105, 106, .3)'}}/></span>
            </div>
        )
    }
}