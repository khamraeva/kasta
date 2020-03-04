import React, { Component } from 'react';
import PCI from './pci.png';
import MasterCard from './mastercard.png';

export default class PayLogos extends Component {
    render() {
        return (
            <div>
                <img className='pci' src={PCI} alt='pci' />
                <img className='mastercard' src={MasterCard} alt='MasterCard' />
            </div>
        )
    }
}

