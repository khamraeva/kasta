import React, { Component } from 'react';
import PCI from './pci.png';

export default class PayLogos extends Component {
    render() {
        return (
            <img className='pci' src={PCI} alt='pci' />
            <img className='mastercard' src={PCI} alt='pci' />
        )
    }
}

