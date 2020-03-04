import React, { Component } from 'react';

// import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='logo' src='./logo.png' alt='logo' />
            </div>
        )
    }
}