import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa-credit-card } from '@fortawesome/free-solid-svg-icons'
// import './payform.css';

export default class PayForm extends Component {
    render() {
        return (
            <div className='container'>
               
               <FontAwesomeIcon icon={fa-credit-card} />
            </div>
        )
    }
}
