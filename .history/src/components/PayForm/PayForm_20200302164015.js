import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './payform.css';

export default class PayForm extends Component {
    render() {
        return (
            <div className='container'>
                <FontAwesomeIcon icon="fa-credit-card-alt" />
            </div>
        )
    }
}
