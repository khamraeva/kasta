import React, { Component } from 'react';
import Header from '../Header/Header';
import PayForm from '../PayForm/PayForm';
import PCI from './pci.png';
import './container.css';

export default class Container extends Component {
    render() {
        return (
            <div className='form-container'>
                <Header />
                <PayForm />
                <div>
                    <img className='pci' src={PCI} alt='pci' />
                </div>
            </div>
            
        )
    }
}
