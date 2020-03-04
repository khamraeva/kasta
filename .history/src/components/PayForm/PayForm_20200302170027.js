import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
// import './payform.css';

export default class PayForm extends Component {
    render() {
        return (
            <div className='container'>
               <FontAwesomeIcon icon={faCreditCard} />
            </div>
        )
    }
}
