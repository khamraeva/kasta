import React, { Component } from 'react';
import Header from '../Header/Header';
import PayForm from '../PayForm/PayForm';

import './container.css';

export default class Container extends Component {
    render() {
        return (
            <div className='form-container'>
                <Header />
                <PayForm />     
            </div>
            
        )
    }
}
