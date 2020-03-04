import React, { Component } from 'react';
import logo 
// import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='logo' src={require('./LOGO.png')} alt='logo' />
            </div>
        )
    }
}