import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import './payform.css';

export default class PayForm extends Component {
    render() {
        return (
            <div className='container'>               
                <FontAwesomeIcon icon={faDotCircle} style={{color: 'rgb(75, 137, 245)'}}/>
                <FontAwesomeIcon icon={faCreditCard} style={{color: 'rgb(110, 124, 145)'}}/>
            </div>
        )
    }
}
