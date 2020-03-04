import React, { Component } from 'react';
import PCI from './pci.png';
import MasterCard from './mastercard.png';
import Visa from './visa.png';
import './paylogos.css';

export default class PayLogos extends Component {
    render() {
        return (
            <div className='logos'>
                <img className='pci' src={PCI} alt='pci' />
                <img className='mastercard' src={MasterCard} alt='MasterCard' />
                <img className='visa' src={Visa} alt='Visa' />
            </div>
        )
    }
}

