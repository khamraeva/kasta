import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import './payform.css';

export default class PayForm extends Component {
    render() {
        return (
            <div className='container'>
                <p className='new-card'>
                    <FontAwesomeIcon icon={faDotCircle} style={{color: 'rgb(75, 137, 245)'}}/>
                    <span style={{padding: '0 5px'}}>Нова картка</span>
                </p>
                <FontAwesomeIcon icon={faCreditCard} style={{color: 'rgb(110, 124, 145)'}}
                                className='card-icon'/>
                <p className='cards-name'>Visa, Mastercard</p>
                <hr className='hr'/>
            </div>
        )
    }
}
